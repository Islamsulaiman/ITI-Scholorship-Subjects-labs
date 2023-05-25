const express = require("express")
const dotenv = require('dotenv')
const app = express();
const axios = require('axios');
const crypto = require('crypto');

dotenv.config({path: '.env'})

app.use(express.json())

const authorizedUsers = {  };

const clientId = process.env.CLIENTID
const clientSecret = process.env.CLIENTSECRET
const redirectUri = process.env.REDIRECTURI
const scope = 'user repo'

// helpers
const fetchUserProfile = async (accessToken) => {
    const {data} = await axios({
        method: 'get',
        url: 'https://api.github.com/user',
        headers: {
            Authorization: `token ${accessToken}`
        }
    })
    return data
}



// Routes

// Ask for user code from Github
app.get('/', (req, res)=>{
    res.json({
        loginUrl: `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}`
    })
})


// using user code from gethub, get the token that will gain cess to user profile
app.get('/home', async function (req, res) {
    const { code } = req.query;

    const tokenResponse = await axios({
        method: 'post',
        headers: {
            accept: 'application/json'
        },
        url: 'https://github.com/login/oauth/access_token',
        params: {
            client_id: clientId, // application
            client_secret: clientSecret, // application
            code, // user
        }
    });

    const accessToken = tokenResponse.data.access_token;

    const sessid = crypto.randomBytes(16).toString('base64');
    authorizedUsers[sessid] = accessToken;

    const data = await fetchUserProfile(accessToken)

    const user = {
            "userName ": data.login,
            "ID" : data.id
        }

    res.setHeader('Set-Cookie', `sessid=${sessid}`);
    res.json(user);
});


app.get('/profile', async function (req, res, next) {
    const cookie = req.headers.cookie;
    const sessid = cookie.replace('sessid=', '');
    const accessToken = authorizedUsers[sessid];
    let data;
    try {
        const response = await fetchUserProfile(accessToken);
        data = response;
        console.log(data)

        const profileURL = await axios({
            method: 'get',
            headers: {
                accept: 'application/json'
            },
            url: data.url,
            params: {
                client_id: clientId, // application
                client_secret: clientSecret, // application
            }
        });
        // const user = {
        //     "userName ": data.login,
        //     "ID" : data.id
        // }
        data = profileURL.data;
        
        res.json(data);
    } catch (err) {
        // next(err);
        console.log(err)
    } 
});




app.get('/followers', async function (req, res, next) {
    const cookie = req.headers.cookie;
    const sessid = cookie.replace('sessid=', '');
    const accessToken = authorizedUsers[sessid];
    let data;
    try {
        const response = await fetchUserProfile(accessToken);
        data = response;
        console.log(data)

        const profileURL = await axios({
            method: 'get',
            headers: {
                accept: 'application/json'
            },
            url: data.followers_url,
            params: {
                client_id: clientId, // application
                client_secret: clientSecret, // application
            }
        });
        // const user = {
        //     "userName ": data.login,
        //     "ID" : data.id
        // }
        data = profileURL.data;
        
        res.json(data);
    } catch (err) {
        // next(err);
        console.log(err)
    } 
});



// app.get('/followers', async function (req, res, next) {
//     const cookie = req.headers.cookie;
//     const sessid = cookie.replace('sessid=', '');
//     const accessToken = authorizedUsers[sessid];
//     let data;
//     try {
//         const response = await fetchUserProfile(accessToken);
//         data = response.data;
//         console.log(response)
//         const user = {
//             "userName ": data.login,
//             "ID" : data.id
//         }
//         res.json(user);
//     } catch (err) {
//         // next(err);
//         console.log(err)
//     } 
// });





// app.get('/profile', async function (req, res, next) {

//     let data;
//     try {
//         const response = await fetchUserProfile(globalAccessToken);
//         data = response.data;

//         const profileURL = await axios({
//             method: 'get',
//             headers: {
//                 accept: 'application/json'
//             },
//             url: data.url,
//             params: {
//                 client_id: clientId, 
//                 client_secret: clientSecret, 
//             }
//         });
//         data = profileURL.data;
//         res.json(data);
//     } catch (err) {
//         // next(err);
//         res.json(err);
//     }
//     // res.json(data);
// });


app.get('/repos', async function (req, res, next) {
    const cookie = req.headers.cookie;
    const sessid = cookie.replace('sessid=', '');
    const accessToken = authorizedUsers[sessid];
    let data;
    try {
        const response = await fetchUserProfile(accessToken);
        data = response;
        console.log(data)

        const profileURL = await axios({
            method: 'get',
            headers: {
                accept: 'application/json'
            },
            url: data.repos_url,
            params: {
                client_id: clientId, // application
                client_secret: clientSecret, // application
            }
        });
        // const user = {
        //     "userName ": data.login,
        //     "ID" : data.id
        // }
        data = profileURL.data;
        
        res.json(data);
    } catch (err) {
        // next(err);
        console.log(err)
    } 
});


app.use((error, req, res, next) => {
    if (error.response.data.message === 'Bad credentials') return res.json({
        code: 'UNAUTHORIZED',
        message: 'Please login again'
    });
    res.json(error.response.data);
});


// Start server
const port = process.env.PORT
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
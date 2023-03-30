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
    return axios({
        method: 'get',
        url: 'https://api.github.com/user',
        headers: {
            Authorization: `token ${accessToken}`
        }
    })
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

    console.log(tokenResponse.data)

    const accessToken = tokenResponse.data.access_token;

    const sessid = crypto.randomBytes(16).toString('base64');
    authorizedUsers[sessid] = accessToken;

    res.setHeader('Set-Cookie', `sessid=${sessid}`);
    res.json('success');
});


// Start server
const port = process.env.PORT
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
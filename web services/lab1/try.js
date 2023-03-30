const express = require('express');
const axios = require('axios');
const crypto = require('crypto');

const app = express();

const authorizedUsers = {  };

const clientId = "XXXXXXX";
const clientSecret = "XXXXXXXXXXXXXXXXXXX";

const appRedirectUri = "http://localhost:3000/redirect"
const scope = "user repo";

app.listen(3000, function () {
    console.log('Server started on port: ', this.address().port);
});

app.get('/', function (req, res) {
    res.json({
        loginByGitHub: `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${appRedirectUri}&scope=${scope}`
    });
});


const fetchUserProfile = async (accessToken) => {
    return axios({
        method: 'get',
        url: 'https://api.github.com/user',
        headers: {
            Authorization: `token ${accessToken}`
        }
    })
}

app.get('/redirect', async function (req, res) {
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

    res.setHeader('Set-Cookie', `sessid=${sessid}`);
    res.json('success');
});

app.get('/profile', async function (req, res, next) {
    const cookie = req.headers.cookie;
    const sessid = cookie.replace('sessid=', '');
    const accessToken = authorizedUsers[sessid];
    let data;
    try {
        const response = await fetchUserProfile(accessToken);
        data = response.data;
    } catch (err) {
        next(err);
    }
    res.json();
});


app.use((error, req, res, next) => {
    if (error.response.data.message === 'Bad credentials') return res.json({
        code: 'UNAUTHORIZED',
        message: 'Please login again'
    });
    res.json(error.response.data);
});
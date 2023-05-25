const express = require('express');
const axios = require('axios');
const crypto = require('crypto');
const client_id = '2c8626622e0d9b3c45d0';
const client_secret = 'e107b9d538857918c779d0197a858589a9c7cad2';
const redirect_uri='http://localhost:3000/redirect'
const app = express();
const scope = 'user';
const authorizedUsers={};
app.listen(3000,()=>{
    console.log('Start 3000');
})


app.get('/',async (req,res,next)=>{
//     await axios({
//         method:'get',
//         url:`https://github.com/login/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope}`,
//         headers:{
//             accept:'application/json'
//         }
//    });
    //  res.json({
    //     loginByGitHub : `GET https://github.com/login/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope}`
    //  });
     res.redirect(`https://github.com/login/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope}`)
});

app.get('/redirect',async (req,res,next)=>{
    const { code } = req.query
   const response = await axios({
        method:'post',
        url:'https://github.com/login/oauth/access_token',
        headers:{
            accept:'application/json'
        },
        params:{
            client_id,
            client_secret,
            code
        }
   });
   
   const access_token = response.data.access_token;
   const data = await getGitHubUserData(access_token);
   const sessid = crypto.randomBytes(16).toString('base64');
   authorizedUsers[sessid] = access_token;

   res.setHeader('Set-Cookie', `sessid=${sessid}`);
   res.json(data)
});

async function getGitHubUserData(access_token) {
    const { data } = await axios({
      url: 'https://api.github.com/user',
      method: 'get',
      headers: {
        Authorization: `token ${access_token}`,
      },
    });
    return data;
  };

  app.get('/profile', async function (req, res, next) {
    const cookie = req.headers.cookie;
    const sessid = cookie.replace('sessid=', '');
    const accessToken = authorizedUsers[sessid];
    try {
        const response = await getGitHubUserData(accessToken);
        let data = response;
        console.log(data);
        const profileURL = await axios({
            method: 'get',
            headers: {
                accept: 'application/json'
            },
            url: data.url,
            params: {
              client_id,
              client_secret
            }
        });
        data = profileURL.data;
        res.json(data);
    } catch (err) {
        res.json(err);
    }
});

app.get('/followers', async function (req, res, next) {
  const cookie = req.headers.cookie;
  const sessid = cookie.replace('sessid=', '');
  const accessToken = authorizedUsers[sessid];
  let data;
  try {
      const response = await getGitHubUserData(accessToken);
      data = response;

      const profileURL = await axios({
          method: 'get',
          headers: {
              accept: 'application/json'
          },
          url: data.followers_url,
          params: {
            client_id,
            client_secret
          }
      });
      data = profileURL.data;
      res.json(data);
  } catch (err) {
      res.json(err);
  }
});

app.get('/repos', async function (req, res, next) {
  const cookie = req.headers.cookie;
  const sessid = cookie.replace('sessid=', '');
  const accessToken = authorizedUsers[sessid];
  let data;
  try {
      const response = await getGitHubUserData(accessToken);
      data = response;

      const profileURL = await axios({
          method: 'get',
          headers: {
              accept: 'application/json'
          },
          url: data.repos_url,
          params: {
            client_id,
            client_secret
          }
      });
      data = profileURL.data;
      res.json(data);
  } catch (err) {
      res.json(err);
  }
});
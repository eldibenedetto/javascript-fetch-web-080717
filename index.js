const app = "I don't do much.";
const token = '6b56040339a92374fb0e39b507a3a8c227d8b59e'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));

const httpReq = require('axios');

module.exports = {
  async user(username) {
    let data;
    try {     
      data = await httpReq.get(`https://api.github.com/users/${username}`);
    } catch (error) {
      console.error(error);
    }
    return data; 
  }
};
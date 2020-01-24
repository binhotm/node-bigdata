const express = require('express');
const api = express();

api.get("/" , (req, res) => {
  return res.json({message : "Hello!!!", "Random Col" : 1});    
});


api.use(express.json());
api.listen(3100);

module.exports = api;
const express = require('express');
const path = require('node:path');

const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
  return;
})

app.listen(3000, () =>{
  console.log('server started on port 3000');
})
require('babel/register');

var app = require('./app');

// TODO: dotenv
app.listen(process.env.PORT || 3000, function () {
  console.log('skyway started');
});

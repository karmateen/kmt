const app = require('./app.js');

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log (`Server is running on port ${PORT}`);
});
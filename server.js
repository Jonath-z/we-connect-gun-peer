const expxress = require("express");
const Gun = require("gun");
const app = expxress();

const port = 4000;
app.use(Gun.serve);

const server = app.listen(port, () => {
  console.log("server is running on http://localhost:" + port);
});

Gun({ web: server });

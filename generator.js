const fs = require("fs");

module.exports = api => {
  api.render("./template");

  api.onCreateComplete(() => {
    const path = api.resolve("./public/favicon.ico");
    fs.unlinkSync(path);
  });
};

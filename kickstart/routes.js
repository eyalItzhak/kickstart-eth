const routes = require("next-routes")();

routes
  .add("/campaigns/new", "/campaigns/new")
  .add("/campaigns/:address", "/campaigns/show"); //if user url look like "/campaigns/0xSomeAddress" we show the "show" page...

module.exports = routes;

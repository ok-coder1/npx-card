const { render } = require("prettyjson");
const data = require("./data");

const renderArgs = {
    dashColor: "cyan",
    keysColor: "blue",
    stringColor: "white"
};

module.exports = ({ json }) => json ? JSON.stringify(data) : render(data, renderArgs);

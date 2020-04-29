const path = require("path");
const fs = require("fs");
const solc = require("solc");

const inboxPath = path.resolve(__dirname, "contracts", "inbox.sol");
const source = fs.readFileSync(inboxPath, "utf8");

const input = JSON.stringify({
  language: "Solidity",
  sources: {
    "inbox.sol": {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      "*": {
        "*": ["*"],
      },
    },
  },
});
const abiString = solc.compile(input, 1);
const inboxContract = JSON.parse(abiString).contracts["inbox.sol"].Inbox;
module.exports = inboxContract;

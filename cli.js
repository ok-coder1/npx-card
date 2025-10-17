#!/usr/bin/env node

const cowsay = require("cowsay");
const crypto = require("crypto");
const lolcatjs = require("lolcatjs");
const minimist = require("minimist");
const pkg = require(".");

const args = {
    alias: { json: 'j' }
};

lolcatjs.options.seed = Math.round(Math.random() * 1000);
lolcatjs.options.colors = true;

const argv = minimist(process.argv.slice(2), args);

const randomCow = crypto.randomInt(1, 3);
if (randomCow == 1)
{
    console.log(
        lolcatjs.fromString(
            cowsay.say(
                {
                    text: "i read code",
                    f: "./cows/okcoder1.cow"
                }
            )
        )
    );
}
else if (randomCow == 2)
{
    console.log(
        lolcatjs.fromString(
            cowsay.say(
                {
                    text: "i read code\n  - okcoder1",
                    f: "whale"
                }
            )
        )
    );
}
console.log(pkg(argv));

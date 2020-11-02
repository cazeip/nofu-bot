const { throws } = require("assert");
const { put } = require("request");
var crypto = require("crypto-js");
module.exports = {
    name: "mcregister",
    description: "Register with your minecraft uuid with /mcregister <uuid>",
    execute(message, args) {
        const fetch = require("node-fetch");
        const https = require('https');

        let prefix = "%";
        let UnEnc_uuid = message.content.slice(prefix.length + 10).trim().split(/ +/);
        let uuid = [crypto.SHA256(UnEnc_uuid)];
        let uuString = uuid[0];
        let user = message.member.displayName;
        let example_uuid = "b1fb748e605254f2f4cdc0eab68680bf11a436a433ba45acf60a06d6cac7ea49"; //encoded

        if (uuid[0].length !== example_uuid.length) {
            message.channel.send("Please use your uuid to register! (registering with name is currently in developement)");
            console.log("Invalid UUID");
            return;
        }

        https.get('https://jsonblob.com/api/jsonBlob/' + process.env.json_regs, res => {
            let body = '';

            res.on('data', chunk => {
                body += chunk;
            });

            res.on('end', () => {
                let bodyString = JSON.parse(body);
                console.log(bodyString);

                let data = {
                    "counter": 0,
                    "regs": {}
                }

                let num = data.counter;
                let nextUser = num++;

                var newReg = message.author.id;

                for (const [key, value] of Object.entries(bodyString.regs)) {
                    console.log("-----------");
                    console.log({ value, uuString });
                    console.log("-----------");

                    if (value.includes(uuString)) {
                        message.reply("this UUID is already registered!");
                        return;
                    }
                }

                bodyString["counter"] = Object.keys(bodyString.regs).length;
                bodyString["regs"][newReg] = uuid;

                console.log("--------------------------");
                console.log(bodyString);

                fetch("https://jsonblob.com/api/jsonBlob/" + process.env.json_regs, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(bodyString),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                    })
                    .then(message.reply("Succesfully logged in as " + message.author.tag + " with MC-UUID " + uuString))
                    .catch((err) => console.log(err));

            });

        });

    }
}

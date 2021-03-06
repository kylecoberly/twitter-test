require("dotenv").load();
const express = require("express");
const app = express();

const Twitter = require("twitter");
const twitter = new Twitter({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token_key: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

app.get("/", (request, response) => {
    var params = {screen_name: "nodejs"};
    twitter.get("statuses/user_timeline", params, function(error, tweets, twitterResponse) {
        if (!error) {
            console.log(tweets);
            response.send({tweets});
        }
    });
});

app.listen(process.env.PORT || 3000);

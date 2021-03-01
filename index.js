//const express = require('express');
import "core-js";
import express from "express";
import logger from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

const app = express();

const PORT = 4000;

/*function handleHome(req, res) {
    res.send("Hello form home");
}*/
const handleHome = (req, res) => res.send("Hello from home!!");

/*function handleProfile(req, res) {
    res.send("You are on my profile");
}*/

const betweenHome = (req, res, next) => {
    console.log("Between My Home!");
    next();
}

const handleProfile = (req, res) => res.send("You are on my profile");

/*function handleListening() {
    console.log(`listening on http://localhost:${PORT}`);
}*/
const handleListening = (req, res) => console.log(`listening on http://localhost:${PORT}`);

app.use(betweenHome);
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(logger("combined"));

app.get('/', handleHome);

app.get('/profile', handleProfile);

app.listen(PORT, handleListening);
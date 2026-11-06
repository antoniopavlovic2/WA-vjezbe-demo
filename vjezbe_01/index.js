// type = module
import express from "express";

//type = common js
//const express = require("express");
const app = express();
const PORT = 8000;
app.listen(PORT, error => {
if (error) {
console.error(`Greška prilikom pokretanja poslužitelja: ${error.message}`);
} else {
console.log(`Server je pokrenut na http://localhost:${PORT}`);
}
});

app.get("/", (req, res) => {
    res.send("Hello World!");
});
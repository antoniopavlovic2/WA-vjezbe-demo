// type = module
// mport express from "express";

//type = common js
const express = require("express");
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
    res.sendFile(__dirname + "/public/index.html");
});

app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/public/about.html");
});


app.get("/users", (req, res) => {
    const korisnici = [
        { id: 1, ime: "Antonio", prezime: "Pavlović" },
        { id: 2, ime: "Antonio", prezime: "Ivić" },
        { id: 3, ime: "Antonio", prezime: "Anić" }
    ];

    res.json(korisnici);
});

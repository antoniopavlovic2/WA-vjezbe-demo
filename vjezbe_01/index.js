// type = module
import express from "express";

//type = common js
//const express = require("express");

const app = express();

let PORT = 8000;
// poslužitelj sluša na PORTU 8000
app.listen(PORT, () => {
    console.log(`Server jušto dela na portu ${PORT}`);
})
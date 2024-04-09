const path = require("path");
const dotenv = require('dotenv').config();
var cors = require('cors');
const fileUpload = require("express-fileupload");
const express = require("express");
const { connect } = require('./app/database');
const { blizzardLogIn } = require('./app/controllers/BlizzardAuth');
const { tokenPriceList } = require('./app/controllers/Token');
const { wowTokenService } = require('./app/services/wowToken');
const { bgGreen } = require('colors');

(async () => {
  const app = await express();



  //* BodyPaser
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  //* File Upload Middleware
  app.use(fileUpload());


  app.use(cors());

  //* Static Folder
  app.use(express.static(path.join(__dirname, "app", "public")));


  //* Routes
  app.get('/tokenPriceList', tokenPriceList)
  //* Database connection
  await connect(app);

  await blizzardLogIn();

  wowTokenService();

  const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => {
    console.log(
      `Server running in ${process.env.NODE_ENV} mode on port ${bgGreen(PORT)}`
    )
  });

})();



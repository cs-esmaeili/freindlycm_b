const path = require("path");
const dotenv = require('dotenv').config();
var cors = require('cors');
const fileUpload = require("express-fileupload");


const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

const { Server } = require("socket.io");

const io = new Server(server, {
  cors: {
    origin: `http://localhost:${process.env.PORT_UI}`
  }
});

const { connect } = require('./app/database');
const { blizzardLogIn } = require('./app/controllers/BlizzardAuth');
const { getTokenPriceFromBlizzard, tokenPriceList } = require('./app/controllers/Token');
const { userList, addUser, deleteUser, updateUser } = require('./app/controllers/User');
const { classList } = require('./app/controllers/Class');
const { deleteHero, addHero } = require('./app/controllers/Hero');
const { getGeneralData, setGeneralData } = require('./app/controllers/General');
const { gpList, addGp, addHeroToGp, deleteHeroFromGp, deleteGp } = require('./app/controllers/Gp');
const { wowTokenService } = require('./app/services/wowToken');
const { bgGreen } = require('colors');

(async () => {


  //* BodyPaser
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  //* File Upload Middleware
  app.use(fileUpload());


  app.use(cors());

  //* Static Folder
  app.use(express.static(path.join(__dirname, "app", "public")));


  //* Routes
  app.get('/getGeneralData', getGeneralData);
  app.post('/setGeneralData', setGeneralData);
  app.get('/userList', userList);
  app.get('/gpList', gpList);
  app.post('/addUser', addUser);
  app.post('/deleteUser', deleteUser);
  app.post('/updateUser', updateUser);
  app.post('/deleteHero', deleteHero);
  app.post('/addHero', addHero);
  app.get('/classList', classList);
  app.post('/addGp', addGp);
  app.post('/deleteGp', deleteGp);
  app.post('/addHeroToGp', addHeroToGp);
  app.post('/deleteHeroFromGp', deleteHeroFromGp);

  //* Database connection
  await connect(app);

  await blizzardLogIn();

  wowTokenService();

  io.on('connection', async (socket) => {
    global.io = io;
    // console.log('User connected with id: ' + socket.id);
    await getTokenPriceFromBlizzard();
    const tokenList = await tokenPriceList();
    io.to(socket.id).emit("wowToken", tokenList);
  })

  const PORT = process.env.PORT || 3000;

  server.listen(PORT, () => {
    console.log(
      `Server running in ${process.env.NODE_ENV} mode on port ${bgGreen(PORT)}`
    )
  });

})();



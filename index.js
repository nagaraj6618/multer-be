const express = require("express");
const cors = require('cors');
const multerUpload = require('./multer/multer');
const multer = require('multer')
const {uploadImage} = require('./util/cloudinary');
require('dotenv').config();
const PORT = process.env.PORT;

const app = express();



app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());



// const storage = new multer.memoryStorage();
// const multerUpload = multer({ storage }).;

app.get('/',(req,res) => {
   
   res.status(200).json({
      message:"Working",
      success:true
   });

});






app.post('/', multerUpload.single("image"),uploadImage)
app.listen(PORT,()=>console.log(`http://localhost:${PORT}`));
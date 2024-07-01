const express = require("express");
const cors = require('cors');
const multer = require("multer");
require('dotenv').config();
const PORT = process.env.PORT;
const os = require('os');
const path = require('path');

const app = express();
// console.log(process.env.PORT);


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.get('/',(req,res) => {
   
   res.status(200).json({
      message:"Working",
      success:true
   });

});




// console.log(path.join(__dirname,'uploads'))

const storage = multer.diskStorage({
   destination: function (req, file, cb) {
      const tempDir = path.join(__dirname, 'uploads');
      cb(null, tempDir);
   },
   filename: function (req, file, cb) {
      cb(null, file.originalname);
   }
});

const upload = multer({ storage: storage });

app.post('/', upload.single('image'), async (req, res) => {
   try {
      const image = req.file;
      console.log(image);
      if (!image) {
         return res.status(500).json({
            message: "File upload is not successful",
            success: false,
         });
      }

      res.status(200).json({
         message: "Success true",
      });
   } catch (error) {
      res.status(500).json({
         error: error.message,
         message: "Not Upload"
      });
   }
});

// app.get("/image/:id",(req,res) => {
//    res.sendFile('')
// })

app.listen(PORT,()=>console.log(`http://localhost:${PORT}`));
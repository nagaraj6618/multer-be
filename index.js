const express = require("express");
const cors = require('cors');
const multer = require("multer");
require('dotenv').config();
const PORT = process.env.PORT;


const app = express();
// console.log(process.env.PORT);


app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res) => {
   
   res.status(200).json({
      message:"Working",
      success:true
   });

});


const storage = multer.diskStorage({
   destination:function (req,file,cb){
      cb(null,"./uploads");
   },
   filename:function(req,file,cb){
      cb(null,file.originalname);
   }
});

const uploads = multer({storage:storage});

app.post('/',uploads.single('image'),async(req,res) => {

   const image = req.file;
   console.log(image);
   if(!image){
      return res.status(500).json({
         message:"File upload is not successfull",
         success:false,
      });

   };
   console.log(image);
   res.status(200).json({
      message:"Success true",
   })
})

app.listen(PORT,()=>console.log(`http://localhost:${PORT}`));
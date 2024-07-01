const express = require("express");
const cors = require('cors');
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

})

app.listen(PORT,()=>console.log(`http://localhost:${PORT}`));
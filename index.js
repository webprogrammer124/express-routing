const express = require('express');

const path = require('path')
const bodyParser= require('body-parser');

const app = express();

const PORT = 4000;
app.use(bodyParser.urlencoded({extended:true}));

app.listen(PORT,(req,res)=>{
    console.log('server is running at port:',PORT)
})
// app.get('/',(req,res)=>{
//     res.send('<h1>my first app')
// })
// app.get("/aboutus",(req,res)=>{
//     // res.send('<h1>Aboutus</h1>')
//     res.sendFile(path.join(__dirname,'public','aboutus.html'))
// }
// )
// app.get("/contactus",(req,res)=>{
//     res.sendFile(path.join(__dirname,'public','contactus.html'))
// }
// )
// app.get("/home",(req,res)=>{
//     res.sendFile(path.join(__dirname,'public','home.html'))
// }
// )
// app.get("/login",(req,res)=>{
//     res.sendFile(path.join(__dirname,'public','login.html'))
// }
// )

app.use(express.static(path.join(__dirname,'public')))

app.get("/signin",(req,res)=>{
         res.sendFile(path.join(__dirname,'registration','signin.html'))
     }
     )
      app.post("/signin",(req,res)=>{
          res.send(req.body.email)
      })




     app.get("/signup",(req,res)=>{
        res.sendFile(path.join(__dirname,'registration','signup.html'))
    }
    )
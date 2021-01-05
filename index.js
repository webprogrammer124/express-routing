const express = require('express');
const path = require('path')
const bodyParser= require('body-parser');
const app = express();
const PORT = 4000;

app.use(express.static(path.join(__dirname,'public')))
app.use(bodyParser.urlencoded({ extended: true}));
app.listen(PORT,(req,res)=>{
    console.log('server is running at port:',PORT)
})
let users=[
    {name:'seema',id:1,email:'seemagreat.911@gmail.com',password:'222'},
    {name:'bisma',id:1,email:'bismatouseeq2020@gmail.com',password:'222'},
    
]

app.get("/", (req,res)=>{
    // res.send('<h2>AboutUs<h2>')
      res.sendFile(path.join(__dirname, 'public','index.html'))
})

app.get("/signup", (req,res)=>{
    // res.send('<h2>AboutUs<h2>')
      res.sendFile(path.join(__dirname, 'registration','signup.html'))
})
app.post('/signup',(req,res)=>{
    // res.send(req.body)
   // console.log(req.body)
   let {email, name, password} = req.body
   let found = users.some((item)=>item.email == email)
   if(found){
    //    res.send('<h1>User already existed</h1>')
    res.redirect('/login')
   } else{
       users.push({name,email,password,id:users.length+1})
      // res.send('user added')
      res.sendFile(path.join(__dirname, 'registration','login.html'))
   }
 
 })

app.get("/login", (req,res)=>{
    // res.send('<h2>AboutUs<h2>')
    res.sendFile(path.join(__dirname, 'registration','login.html'))
})
app.post('/login',(req,res)=>{
    // res.send(req.body)
   // console.log(req.body)
   let {email, name, password} = req.body
   let found = users.some((item)=>item.email == email)
   if(found){
    //    res.send('<h1>User already existed</h1>')
    res.redirect('/')
   } else{
       users.push({name,email,password,id:users.length+1})
    //   res.sendFile(path.join(__dirname, 'registration','signup.html'))
    res.redirect('/')
   }
 
 })

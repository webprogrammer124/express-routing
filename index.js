const express = require('express');
const path = require('path')
const bodyParser= require('body-parser');
const app = express();
const PORT = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({ extended: true}));
app.listen(PORT,(req,res)=>{
    console.log('server is running at port:',PORT)
})
let users=[
    {name:'seema',id:1,email:'seemagreat.911@gmail.com',password:'222'},
    {name:'bisma',id:1,email:'bismatouseeq2020@gmail.com',password:'222'},
    
]
app.use(express.static(path.join(__dirname,'public')))
app.get('/signup', (req,res)=>{
    // res.send('<h2>AboutUs<h2>')
      res.sendFile(path.join(__dirname, 'registration','signup.html'))
})

app.post('/signup',(req,res)=>{
    let {email, name, password} = req.body
    let found = users.some((item)=>item.email == email)
    let found1 = users.some((item)=>item.password == password)
    if(found && found1){
     //    res.sendFile(path.join(__dirname, 'public', 'index.html'))
     res.redirect('/login')
    } else{
       res.sendFile(path.join(__dirname, 'public','index.html'))
       users.push({name,email,password,id:users.length+1})
     
    }
  
  })
  app.get('/index', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})
app.get('/login', (req, res)=>{
    res.sendFile(path.join(__dirname, 'registration', 'login.html'))
})
app.post('/login',(req,res)=>{
    let {email, name, password} = req.body
    let found = users.some((item)=>item.email == email)
    let found1 = users.some((item)=>item.password == password)
    if(found && found1){
        res.sendFile(path.join(__dirname, 'public', 'index.html'))
     
    } else{
    //    res.sendFile(path.join(__dirname, 'registration','signup.html'))
    res.send('<h1>Please Enter Correct Password</h1>')
    //    users.push({name,email,password,id:users.length+1})
    }
  
  })


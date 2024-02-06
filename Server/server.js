import express from 'express';
import cors from 'cors'
import mysql from 'mysql2'

const app = express();
app.use(cors());
app.use(express.json())

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:"1234",
    database:'crud'
})

db.connect((err) =>{
    if(err){
        console.log(err);
    }else{
        console.log("CONNECTED..");
    }
})


//get Users
app.get('/get',(req,res) => {
    const sql = "Select * from users"
    db.query(sql, (err,result) =>{
        if(err) return res.json({Message: 'Error inside server..'})
        return res.json(result);
    })
})

//save users
app.post('/saveUser',(req,res) => {
    console.log(req.body)
     const sql = "insert into users(id,name,address,age)values(?,?,?,?)";
    // const name = req.body.name;
    // const id = req.body.id;
    // const address = req.body.address;
    // const age = req.body.age;

    const{id,name,address,age} = req.body;

     db.query(sql,[id,name,address,age], (error,result)=>{
        if(error) return res.json(error);
        return res.send("SAVED..");
     })
})

//update users
app.put('/updateUser/:id',(req,res) => {
    const upid = req.params.id;
    const {name,address,age} = req.body;
    const sql = "update users set name=?, address=?, age=? where id=?";

    db.query(sql,[name,address,age,upid],(error,result) =>{
        if(error) return res.json(error);
        return res.send("UPDATED..");
    })
})

//delete users

app.delete('/deleteUser/:id',(req,res) =>{
    const delid = req.params.id;
    const sql = "delete from users where id=?"

    db.query(sql,delid,(error,result) =>{
        if(error) return res.json(error)
        return res.send("DELETED..");
    })
})


app.listen(3000, () =>{
    console.log('Listening..');
})
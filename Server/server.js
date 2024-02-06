import express from 'express';
import cors from 'cors'
import mysql from 'mysql2'

const app = express();
app.use(cors());
// app.use(express.json())

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

app.get('/get',(req,res) => {
    const sql = "Select * from users"
    db.query(sql, (err,result) =>{
        if(err) return res.json({Message: 'Error inside server..'})
        return res.json(result);
    })
})

// app.post('/saveUser',(req,res) => {
//     console.log(req.body);
//      const sql = "INSERT INTO users(`ID`name`,`address`,`age`) VALUES (?,?,?)";
//      const values = [

//      ]
//      db.query(sql, [], (error,result)=>{
//         if(error) return res.json(error);
//         return res.json(result);
//      })
// })

app.listen(3000, () =>{
    console.log('Listening..');
})
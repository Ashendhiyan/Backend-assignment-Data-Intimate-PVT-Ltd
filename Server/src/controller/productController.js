import db from'../dbConnection/db.js'


export const getProducts = async(req,res)=>{
    try{
        const sql = "select * from product"
        db.query(sql,(err,result) => {
            return res.json(result);
        })
    }catch(error){
        console.error("Error retrieving product:", error);
        res.status(500).json({ error: "Error retrieving product" });
    }
}

export const saveProduct = async(req,res) =>{
    try{
        const sql = "insert into product(id,description,weight,price) values (?,?,?,?)";
        const {id,description,weight,price} = req.body;

        db.query(sql,[id,description,weight,price],(error,result)=>{
            return res.send("SAVED..");
        });
    }catch(error){
        console.log("Error creating user:", error);
        res.status(500).json({ error: "Error creating user" });
    }
}
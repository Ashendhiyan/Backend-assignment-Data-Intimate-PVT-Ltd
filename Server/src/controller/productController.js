import db from "../dbConnection/db.js";

export const getProducts = async (req, res) => {
  try {
    const sql = "select * from product";
    db.query(sql, (err, result) => {
      return res.json(result);
    });
  } catch (error) {
    console.error("Error retrieving product:", error);
    res.status(500).json({ error: "Error retrieving product" });
  }
};

export const saveProduct = async (req, res) => {
  try {
    const sql =
      "insert into product(id,description,weight,price) values (?,?,?,?)";
    const { id, description, weight, price } = req.body;

    db.query(sql, [id, description, weight, price], (error, result) => {
      return res.send("SAVED..");
    });
  } catch (error) {
    console.log("Error creating product:", error);
    res.status(500).json({ error: "Error creating product" });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const upid = req.params.id;
    const sql =
      "update product set description=?, weight=?, price=? where id=?";
    const { description, weight, price } = req.body;
    db.query(sql, [description, weight, price, upid], (error, result) => {
      return res.send("UPDATED");
    });
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ error: "Error updating product" });
  }
};

export const deleteProduct = async(req,res)=>{
    try{
        const delid = req.params.id;
        const sql ="delete from product where id=?"
        db.query(sql,delid,(error,result)=>{
            return res.send("DELETED");
        });
    }catch(error){
        console.error("Error deliting product:", error);
        res.status(500).json({ error: "Error deliting product" });
    }
}
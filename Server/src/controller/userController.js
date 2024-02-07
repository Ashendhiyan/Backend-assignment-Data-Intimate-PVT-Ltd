import db from "../dbConnection/db.js";

//save user
export const saveUser = async (req, res) => {
  try {
    const sql = "insert into users(id,name,address,age)values(?,?,?,?)";
    const { id, name, address, age } = req.body;

    db.query(sql, [id, name, address, age], (error, result) => {
      return res.send("SAVED..");
    });
  } catch (error) {
    console.log("Error creating user:", error);
    res.status(500).json({ error: "Error creating user" });
  }
};

//get All users
export const getUsers = async (req, res) => {
  try {
    const sql = "Select * from users";
    db.query(sql, (err, result) => {
      return res.json(result);
    });
  } catch (error) {
    console.error("Error retrieving users:", error);
    res.status(500).json({ error: "Error retrieving users" });
  }
};

//update user
export const updateUser = async (req, res) => {
  try {
    const upid = req.params.id;
    const { name, address, age } = req.body;
    const sql = "update users set name=?, address=?, age=? where id=?";

    db.query(sql, [name, address, age, upid], (error, result) => {
      return res.send("UPDATED..");
    });
  } catch (error) {
    console.error("Error updating users:", error);
    res.status(500).json({ error: "Error updating users" });
  }
};

//delete user
export const deleteUser = async (req, res) => {
  try {
    const delid = req.params.id;
    const sql = "delete from users where id=?";

    db.query(sql, delid, (error, result) => {
      return res.send("DELETED..");
    });
  } catch (error) {
    console.error("Error deliting users:", error);
    res.status(500).json({ error: "Error deliting users" });
  }
};

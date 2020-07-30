const db = require("../config/db-config");

exports.addProduct = async (req, res) => {
  let { name, price, category } = req.body;
  const imageFile = req.file;

  if (!imageFile) {
    res.status(422).send({ msg: "No file provided!" });
    return;
  }

  price = parseFloat(price);
  category = parseInt(category);
  const imageUrl = imageFile.path;

  try {
    await db.query(
      `INSERT INTO store_project.product (name, price, category_id, image_url) VALUES (?, ?, ?, ?)`,
      [name, price, category, imageUrl]
    );

    res.status(201).send({ msg: "Product saved!" });
  } catch (error) {
    console.log(error);

    //Check duplicate entry
    if (error.errno === 1062) {
      res.status(400).send({ msg: "Product already exists!" });
      return;
    }

    res.status(500).send({ msg: "Server error!" });
  }
};

exports.getCategories = async (req, res) => {
  try {
    const result = await db.query(`SELECT * FROM store_project.category`);
    res.status(200).json(result[0]);
  } catch (error) {
    console.log(error);
  }
};

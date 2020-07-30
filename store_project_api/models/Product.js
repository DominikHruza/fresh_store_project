const db = require("../config/db-config");

class Product {
  static async getAllProducts(startIndex, rowCount) {
    const result = await db.execute(
      `SELECT * FROM product LIMIT ${startIndex}, ${rowCount};`
    );

    return result[0];
  }

  static async getByCategory(categoryID, startIndex, rowCount) {
    const result = await db.execute(
      `SELECT * FROM product WHERE category_id = ${categoryID} LIMIT  ${startIndex}, ${rowCount};`
    );

    return result[0];
  }

  static async getTopSellers() {
    const result = await db.execute("CALL select_top_offers");
    return result[0][0];
  }
}

module.exports = Product;

const express = require("express");
const path = require("path");
const stripeConfig = require("./config/stripe-config.js");

//Route imports
const adminRoutes = require("./routes/admin");
const productRoutes = require("./routes/product");

const app = express();
const imageUpload = require("./middleware/imageUpload");

//Util setup
app.use(express.json({ extended: false }));
app.use(imageUpload);
app.use("/images", express.static(path.join(__dirname, "images"))); //Serve images staticaly

//Routes
app.use("/admin", adminRoutes);
app.use("/api/product", productRoutes);
app.post("/create-payment-intent", stripeConfig.handlePaymentIntent);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});

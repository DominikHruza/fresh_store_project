// This is your real test secret API key.
const stripe = require("stripe")(
  "sk_test_51HB15fALO8aJMXfbVsPt9xzE1Bg6CMjWg5FwGEruXAaCw8Mub4ZUyuaSpXc2w6lRfGCHQyXNEzTovOp9imaZyTqL00mgmrgEqW"
);

exports.handlePaymentIntent = async (req, res) => {
  const items = req.body;
  console.log(items);
  calculateOrderAmount(items);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "eur",
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
};

const calculateOrderAmount = (items) => {
  let amount = 0;
  items.forEach((item) => {
    amount += item.price * item.quantity;
  });

  console.log(amount);
  return amount * 100;
};

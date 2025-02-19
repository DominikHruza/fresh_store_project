import axios from "axios";

const stripe = window.Stripe(
  "pk_test_51HB15fALO8aJMXfbqkdhtetEt1f92EvvSAQBFbomaGTclQysMq9OIP5T7wnO9wdT8KUAq4T8GulpvRYdqEVWYLfO00ip7i24qa"
);

export const postPaymentIntent = async (items) => {
  const body = JSON.stringify(items);
  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await axios.post("/create-payment-intent", body, config);
  const data = response.data;

  console.log(stripe);
  const elements = stripe.elements();
  const style = {
    base: {
      color: "#32325d",
      fontFamily: "Arial, sans-serif",
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#32325d",
      },
    },
    invalid: {
      fontFamily: "Arial, sans-serif",
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  };

  var card = elements.create("card", { style: style, hidePostalCode: true });
  // Stripe injects an iframe into the DOM
  console.log(card);
  card.mount("#card-element");

  card.on("change", function(event) {
    // Disable the Pay button if there are no card details in the Element
    document.querySelector("button").disabled = event.empty;
    document.querySelector("#card-error").textContent = event.error
      ? event.error.message
      : "";
  });

  var form = document.getElementById("payment-form");
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    // Complete payment when the submit button is clicked
    payWithCard(stripe, card, data.clientSecret);
  });
};

// Calls stripe.confirmCardPayment
// If the card requires authentication Stripe shows a pop-up modal to
// prompt the user to enter authentication details without leaving your page.
var payWithCard = function(stripe, card, clientSecret) {
  loading(true);
  stripe
    .confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
      },
    })
    .then(function(result) {
      if (result.error) {
        // Show error to your customer
        showError(result.error.message);
      } else {
        // The payment succeeded!
        orderComplete(result.paymentIntent.id);
      }
    });
};
/* ------- UI helpers ------- */
// Shows a success message when the payment is complete
var orderComplete = function(paymentIntentId) {
  loading(false);
  document
    .querySelector(".result-message a")
    .setAttribute(
      "href",
      "https://dashboard.stripe.com/test/payments/" + paymentIntentId
    );
  document.querySelector(".result-message").classList.remove("hidden");
  document.querySelector("button").disabled = true;
};
// Show the customer the error from Stripe if their card fails to charge
var showError = function(errorMsgText) {
  loading(false);
  var errorMsg = document.querySelector("#card-error");
  errorMsg.textContent = errorMsgText;
  setTimeout(function() {
    errorMsg.textContent = "";
  }, 4000);
};
// Show a spinner on payment submission
var loading = function(isLoading) {
  if (isLoading) {
    // Disable the button and show a spinner
    document.querySelector("button").disabled = true;
    document.querySelector("#spinner").classList.remove("hidden");
    document.querySelector("#button-text").classList.add("hidden");
  } else {
    document.querySelector("button").disabled = false;
    document.querySelector("#spinner").classList.add("hidden");
    document.querySelector("#button-text").classList.remove("hidden");
  }
};

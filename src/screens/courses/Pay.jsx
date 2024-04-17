import React from "react";
import axios from "axios";

function Pay({ courseId }) {
  async function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    try {
      const result = await axios.post(
        `http://localhost:8000/pay/purchase/${courseId}`,
        {
          token: localStorage.getItem("session"),
        }
      );

      if (!result) {
        alert("Server error. Are you online?");
        return;
      }

      const { amount, id: order_id, currency, notes } = result.data;

      const options = {
        key: "rzp_test_FotajhzORk2aYr",
        amount: amount.toString(),
        currency: currency,
        name: "Satori Learn",
        description: "Test Transaction",
        order_id: order_id,
        notes: notes,
        handler: async function (response) {
          const data = {
            orderCreationId: order_id,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpayOrderId: response.razorpay_order_id,
            razorpaySignature: response.razorpay_signature,
            notes: notes,
            token: localStorage.getItem("session"),
          };

          const result = await axios.post(
            "http://localhost:8000/pay/verify",
            data
          );

          alert(result.data.msg);
        },
        prefill: {
          name: "Parth",
          email: "parth@gmail.com",
          contact: "9999999999",
        },
        theme: {
          color: "#7289da",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.error("Error:", error.message);
    }
  }

  return (
    <button className="App-link" onClick={displayRazorpay}>
      Buy Now
    </button>
  );
}

export default Pay;

import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import Adv from "../electoralLists/Adv";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import Swal from "sweetalert2";
import { FaStripeS, FaMoneyBillWave } from "react-icons/fa"; // Importing icons
import Nav from "../../component/Nav";
import Footer from "../../component/footer";

const stripePromise = loadStripe(
  "pk_test_51Po3xJA4L1QDrrEEECST7zzuz3EwgAvliyrzirIXNUtRvRBxHoSGucEZfKX6JyA1Z5A5OpSdpSh5VUuvkwGTFAj2007tEPrtx7"
);

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState(0);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    try {
      const response = await fetch(
        "http://localhost:5000/create-payment-intent",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ amount: parseInt(amount), currency: "usd" }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const { error: backendError, clientSecret } = await response.json();

      if (backendError) {
        setError(backendError);
        setProcessing(false);
        return;
      }

      const { error: stripeError, paymentIntent } =
        await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: elements.getElement(CardElement),
            billing_details: {
              email: email,
            },
          },
        });

      if (stripeError) {
        setError(stripeError.message);
      } else if (paymentIntent.status === "succeeded") {
        Swal.fire({
          title: "تمت عملية الدفع بنجاح!",
          text: "شكراً لدفعك.",
          icon: "success",
          confirmButtonText: "موافق",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.assign("/adv"); // Redirect to the Adv page via link
          }
        });
      }

      setProcessing(false);
    } catch (error) {
      console.error("Error:", error.message);
      setError(error.message);
      setProcessing(false);
    }
  };

  return (
    <>
      <Nav />
      <div className="flex items-center justify-center min-h-screen ">
        <form
          onSubmit={handleSubmit}
          className="max-w-md w-full p-8 bg-white shadow-lg rounded-lg border border-gray-200 relative"
        >
          <div className="flex justify-center mb-6">
            <FaStripeS className="text-blue-600 text-5xl mr-2" />
          </div>
          <h2 className="text-3xl font-bold text-center mb-6">صفحة الدفع</h2>
          <input
            type="email"
            placeholder="البريد الإلكتروني"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-4 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="number"
            placeholder="Amount in cents"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="mb-4 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <div className="mb-4">
            <CardElement
              className="p-3 border border-gray-300 rounded-md shadow-sm"
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    color: "#424770",
                    "::placeholder": {
                      color: "#aab7c4",
                    },
                  },
                  invalid: {
                    color: "#9e2146",
                  },
                },
              }}
            />
          </div>
          {error && <div className="text-red-500 mb-4">{error}</div>}
          <button
            type="submit"
            disabled={!stripe || processing}
            className={`w-full p-3 text-green-100 font-semibold rounded-md shadow-md flex items-center justify-center ${
              processing ? "bg-gray-500" : "bg-slate-800 hover:bg-gray-800"
            } transition duration-150`}
          >
            {processing ? "جارٍ المعالجة..." : "ادفع الآن"}
            {!processing && (
              <FaMoneyBillWave className="text-green-500 text-2xl ml-2" />
            )}
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

const PaymentComponent = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default PaymentComponent;

import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import "./Payment.css";
import PayPalLogo from "../Images/paypal-logo.png";

export default function PaypalButton() {
  const CLIENT_ID =
    "AaAw5NrCLz1yT4zwgL8uZiCf80AdFToBqLwpFhcNVJAUNd90tSrWDOr4JvpKc8VftVEuGl3Ix8s4fdc8"; // Replace with your PayPal Client ID
  const currency = "USD";
  const amount = "10.00"; // Example amount\\

  const initialOptions = {
    clientId:  "AaAw5NrCLz1yT4zwgL8uZiCf80AdFToBqLwpFhcNVJAUNd90tSrWDOr4JvpKc8VftVEuGl3Ix8s4fdc8",
    currency: "USD",
    intent: "capture",
  };
const [{ isPending }] = usePayPalScriptReducer();

 
  return (
    <PayPalScriptProvider deferLoading={true} options={initialOptions}>
      <PayPalButtons style={{ layout: "horizontal" }} />
    </PayPalScriptProvider>
  );
}

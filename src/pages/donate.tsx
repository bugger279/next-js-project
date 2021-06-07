import { FunctionComponent, useEffect, useState } from "react";
import { PayPalButton } from "react-paypal-button-v2";

export const Amount: FunctionComponent<{
  amount: Number;
  setAmount: Function;
  value: Number;
}> = ({ amount, setAmount, value }) => {
  return (
    <span
      className={`px-4 py-2 text-lg cursor-pointer bg-gray-light ${
        amount === value ? "border-2 border-yellow" : null
      }`}
      onClick={() => setAmount(value)}
    >
      $ {value}
    </span>
  );
};

const donate = () => {
  const [amount, setAmount] = useState(10);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  const addPaypalScript = () => {
    if (window.paypal) {
      setScriptLoaded(true);
      return;
    }
    const script = document.createElement("script");
    script.src =
      "https://www.paypal.com/sdk/js?client-id=AZfmokzdwdNvJbJUsrUFwbs6z1YKnxlvnFNagnh6emHDQLKc0ReWHyHtIjz_-IOaJkQZ9CK1-vGR6EOG";
    script.type = "text/javascript";
    script.async = true;
    script.onload = () => setScriptLoaded(true);
    document.body.appendChild(script);
  };

  useEffect(() => {
    addPaypalScript();
  }, []);

  const addDonationInDB = async (name: string) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_ENDPOINT}/api/donation`, {
        method: 'post',
        body: JSON.stringify({
          name,
          amount
        })
      });

      const data = await res.json();
      console.log('data donation', data);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="grid md:grid-cols-2 p-5 lg:px-24 h-full gap-5">
      <div className="textBlock-wrapper">
        <h1 className="mb-4 text-2xl md:text-6xl textBlock-title">
          You can <span className="font-bold text-yellow">Help</span>
        </h1>
        <p className="extBlock-subtitle">
          To save please send your contribution to our fund &amp; keep the
          series alive
        </p>
      </div>

      <div className="grid place-items-center">
        <div className="flex flex-col bg-gray-dark rounded-md space-y-4 px-4 py-6 items-center w-10/12 mx-auto">
          <h1 className="textBlock-title">Donate Box</h1>
          <p className="textBlock-subtitle">Any amount will be appreciated.</p>
          <div className="flex flex-row space-x-10">
            <Amount amount={amount} setAmount={setAmount} value={1} />
            <Amount amount={amount} setAmount={setAmount} value={5} />
            <Amount amount={amount} setAmount={setAmount} value={10} />
          </div>
          {scriptLoaded ? (
            <PayPalButton
            amount={amount}
            // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
            onSuccess={(details, data) => {
              addDonationInDB(details.payer.name.given_name);
              alert("Transaction completed by " + details.payer.name.given_name);
    
              // // OPTIONAL: Call your server to save the transaction
              // return fetch("/paypal-transaction-complete", {
              //   method: "post",
              //   body: JSON.stringify({
              //     orderID: data.orderID
              //   })
              // });
            }}
          />
          ): <span>Loading...</span>}
        </div>
      </div>
    </div>
  );
};

export default donate;

import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({price}) => {
    const priceForStripe  = price * 100;
    const publishableKey = 'pk_test_51ImbwNBs7gF0kf6fSBBrT7pqedMTUEMeHIfz4HtpmQKCGS1pYr3TMVuugdxcXPq1MlEWOe0QOnifmPkPlRxMAIs7007PqOz5j2';


   const onToken = token => {
        console.log(token);
        alert ('Payment Successful');
    }

    return (
        <StripeCheckout 
        label = 'Pay Now'
        name = 'CRWN CLOTHING LTD.'
        billingAddress
        shippingAddress
        image = 'https://svgshare.com/i/CUz.svg'
        description = {`Your total is $${price}`}
        amount = {priceForStripe}
        panelLabel = 'Pay Now'
        token = {onToken}
        stripeKey = {publishableKey}
        />
    );
};


export default StripeCheckoutButton;
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey =
		'pk_test_51H9u1kLmDvIoUOuhl1PpmK1n4or5g1Ul8Ifd62XXnqKWfgpk9nBwCxx4w59GVAbiQi4Z5vCwj8TUXjep6esEcaWr0098To7Bg1';

	const onToken = (token) => {
		alert('Payment Successful');
	};

	return (
		<StripeCheckout
			label="Pay Now"
			name="Vogue Ltd."
			billingAddress
			shippingAddress
			image=""
			description={`Your total is ${price}\u20ac`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};
export default StripeCheckoutButton;

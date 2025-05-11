import React from 'react';

export default function StripeCheckout({ onPurchase }) {
  return (
    <button onClick={onPurchase} className="btn-secondary">
      Upgrade to Premium
    </button>
  );
}
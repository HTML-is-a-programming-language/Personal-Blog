import React, { useState } from 'react';

function Payment() {
  const [amount, setAmount] = useState(0);

  const handlePayment = async () => {
    // 예시로 stripe 토큰을 받는 부분 생략
    const paymentInfo = {
      amount: amount * 100, // Stripe는 금액을 센트 단위로 처리
      source: 'tok_visa', // 실제 결제에서는 Stripe의 결제 토큰을 받아서 사용
    };

    try {
      const response = await fetch('http://localhost:5000/api/payment/charge', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentInfo),
      });

      const result = await response.json();
      if (response.ok) {
        alert(`Payment successful: ${result.id}`);
      } else {
        alert('Payment failed');
      }
    } catch (error) {
      console.error('Error processing payment:', error);
    }
  };

  return (
    <div>
      <h1>Payment</h1>
      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
}

export default Payment;

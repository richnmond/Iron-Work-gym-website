'use client'

import { CardElement, useStripe, useElements, Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { useState } from 'react'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

function CheckoutForm({ amount, onSuccess }: { amount: number; onSuccess: () => void }) {
  const stripe = useStripe()
  const elements = useElements()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!stripe || !elements) return

    setLoading(true)
    setError('')

    const cardElement = elements.getElement(CardElement)

    if (!cardElement) {
      setError('Card element not found')
      setLoading(false)
      return
    }

    // Create payment intent on your backend
    const response = await fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount })
    })

    const { clientSecret } = await response.json()

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
        billing_details: {
          name: 'Customer Name' // Get from form
        }
      }
    })

    if (result.error) {
      setError(result.error.message || 'Payment failed')
    } else {
      if (result.paymentIntent.status === 'succeeded') {
        onSuccess()
      }
    }
    
    setLoading(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="border rounded-xl p-4">
        <CardElement 
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
      </div>

      {error && (
        <div className="text-red-600 bg-red-50 p-3 rounded-lg">
          {error}
        </div>
      )}

      <div className="bg-gray-50 p-4 rounded-lg">
        <div className="flex justify-between mb-2">
          <span>Amount:</span>
          <span className="font-bold">${amount}</span>
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          <span>Payment secured by Stripe</span>
          <span>💳 🔒</span>
        </div>
      </div>

      <button
        type="submit"
        disabled={!stripe || loading}
        className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-lg disabled:opacity-50"
      >
        {loading ? 'PROCESSING...' : `PAY $${amount}`}
      </button>
    </form>
  )
}

export default function StripePayment({ amount, onSuccess }: { amount: number; onSuccess: () => void }) {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm amount={amount} onSuccess={onSuccess} />
    </Elements>
  )
}
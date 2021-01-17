import React from 'react'

import CheckoutForm from './CheckoutForm'

function App() {
  return (
    <div className="grid grid-rows-layout min-h-screen max-w-screen-lg px-8 py-14 mx-auto">
      <div className="font-bold text-4xl text-gray-600">Checkout</div>
      <CheckoutForm />
      <div className="text-center text-xs text-gray-400">
        Tung Teng @ DevChallenges.io
      </div>
    </div>
  )
}

export default App

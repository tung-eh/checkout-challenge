import React from 'react'

import Input from './Input'

const CheckoutForm = () => {
  return (
    <div className="grid grid-cols-form py-14">
      <div>
        <h2 className="font-bold text-lg text-gray-700">Contact information</h2>
        <Input placeholder="Enter your email.." />
        <Input placeholder="Enter your phone.." />
        <h2 className="font-bold text-lg text-gray-700">Shipping address</h2>
        <Input placeholder="Your name.." />
        <Input placeholder="Your address.." />
        <Input placeholder="Your city.." />
        <div className="grid grid-cols-2">
          <Input placeholder="Your country.." />
          <Input placeholder="Your postal code.." />
        </div>
        <input type="checkbox" />
        Save this information for next time
        <div className="flex justify-end">
          <button>Continue</button>
        </div>
      </div>
      <div>Items</div>
    </div>
  )
}

export default CheckoutForm

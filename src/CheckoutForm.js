import React from 'react'

import Input from './Input'

const CheckoutForm = () => {
  return (
    <div className="grid grid-cols-form gap-32 py-14 mb-20">
      <div>
        <h2 className="font-bold text-lg text-gray-700 mb-3">
          Contact information
        </h2>
        <Input
          label="E-mail"
          icon="email"
          type="email"
          placeholder="Enter your email.."
        />
        <Input
          label="Phone"
          icon="phone"
          type="tel"
          placeholder="Enter your phone.."
        />
        <h2 className="font-bold text-lg text-gray-700 mt-16 mb-3">
          Shipping address
        </h2>
        <Input
          label="Full name"
          icon="account_circle"
          placeholder="Your name.."
        />
        <Input label="Address" icon="home" placeholder="Your address.." />
        <Input label="City" icon="location_city" placeholder="Your city.." />
        <div className="grid grid-cols-2 gap-8">
          <Input label="Country" icon="public" placeholder="Your country.." />
          <Input
            label="Postal code"
            icon="markunread_mailbox"
            placeholder="Your postal code.."
          />
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

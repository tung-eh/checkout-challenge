import React from 'react'

import CartItems from './CartItems'
import Input from './Input'

const CheckoutForm = () => {
  return (
    <form
      className="grid md:grid-cols-form md:grid-flow-col-dense items-start gap-8 md:gap-28 py-14 mb-20"
      onSubmit={(e) => e.preventDefault()}
    >
      <CartItems className="md:col-start-2" />
      <div>
        <h2 className="font-bold text-lg text-gray-700 mb-3">
          Contact information
        </h2>
        <Input
          label="E-mail"
          icon="email"
          type="email"
          placeholder="Enter your email.."
          required
        />
        <Input
          label="Phone"
          icon="phone"
          type="tel"
          placeholder="Enter your phone.."
          required
        />
        <h2 className="font-bold text-lg text-gray-700 mt-16 mb-3">
          Shipping address
        </h2>
        <Input
          label="Full name"
          icon="account_circle"
          placeholder="Your name.."
          required
        />
        <Input
          label="Address"
          icon="home"
          placeholder="Your address.."
          required
        />
        <Input
          label="City"
          icon="location_city"
          placeholder="Your city.."
          required
        />
        <div className="grid grid-cols-2 gap-8 mb-2">
          <Input
            type="country"
            label="Country"
            icon="public"
            placeholder="Your country.."
            required
          />
          <Input
            label="Postal code"
            icon="markunread_mailbox"
            placeholder="Your postal code.."
            required
          />
        </div>
        <Input type="checkbox" label="Save this information for next time" />
        <div className="flex justify-end">
          <button
            type="submit"
            className="rounded-xl bg-yellow-500 hover:bg-yellow-600 font-bold text-white py-4 px-12"
          >
            Continue
          </button>
        </div>
      </div>
    </form>
  )
}

export default CheckoutForm

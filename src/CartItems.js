import React, { useState } from 'react'

import bagImg from './images/photo1.png'
import shoesImg from './images/photo2.png'

const items = [
  {
    name: 'Vintage Backbag',
    image: bagImg,
    originalPrice: 94.99,
    price: 54.99,
  },
  { name: 'Levi shoes', image: shoesImg, originalPrice: 124.99, price: 74.99 },
]
const shippingFee = 19

const Item = ({ name, image, originalPrice, price, count, setCount }) => (
  <div className="flex">
    <img className="rounded-xl w-32 mr-4" src={image} alt="item" />
    <div className="flex flex-col justify-between">
      <div>
        <div className="font-bold text-gray-600">{name}</div>
        <div className="flex items-center font-bold text-yellow-500">
          ${price}
          <span className="text-gray-600 text-xs line-through ml-3">
            ${originalPrice}
          </span>
        </div>{' '}
      </div>
      <input
        className="border border-gray-500 focus:ring-1 focus:ring-gray-700 outline-none bg-transparent p-3 rounded-xl font-bold text-gray-700 w-32"
        type="number"
        min={1}
        value={count}
        onChange={(e) => setCount(e.target.value)}
      />
    </div>
  </div>
)

const CartItems = ({ className }) => {
  const [counts, setCounts] = useState([1, 1])
  const setCountCreator = (index) => (count) => {
    const newCounts = [...counts]
    newCounts[index] = count

    return setCounts(newCounts)
  }
  const total =
    items
      .map((item, index) => item.price * counts[index])
      .reduce((a, b) => a + b, 0) + shippingFee

  return (
    <div className={'bg-gray-100 rounded-xl p-8 ' + className}>
      <div className="grid gap-8 mb-20">
        {items.map((item, index) => (
          <Item
            {...item}
            count={counts[index]}
            setCount={setCountCreator(index)}
          />
        ))}
      </div>
      <div className="flex justify-between border-t border-gray-300 font-bold text-lg text-gray-700 py-2">
        Shipping
        <span className="text-sm">${shippingFee}</span>
      </div>
      <div className="flex justify-between border-t border-gray-300 font-bold text-lg text-gray-700 pt-2">
        Total
        <span className="text-sm">${total.toFixed(2)}</span>
      </div>
    </div>
  )
}

export default CartItems

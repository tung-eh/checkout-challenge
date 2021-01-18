import React, { useRef } from 'react'

import Icon from './Icon'

const NumberInput = ({ value, onChange }) => {
  const inputRef = useRef()

  const decrease = () => {
    inputRef.current.stepDown()
    onChange(inputRef.current.value)
  }

  const increase = () => {
    inputRef.current.stepUp()
    onChange(inputRef.current.value)
  }

  return (
    <div className="relative">
      <input
        className="border border-gray-500 focus:ring-1 focus:ring-gray-700 outline-none bg-transparent p-3 rounded-xl font-bold text-gray-700 text-center w-32"
        style={{ appearance: 'textfield' }}
        type="number"
        min={1}
        max={100}
        value={value}
        ref={inputRef}
        onChange={(e) => onChange(e.target.value)}
      />
      <button
        className="absolute bottom-3 left-3 bg-gray-200 rounded fill-current text-gray-500"
        style={{ marginBottom: '1px' }} //input border
        type="button"
        onClick={decrease}
      >
        <Icon name="remove" />
      </button>
      <button
        className="absolute bottom-3 right-3 bg-gray-200 rounded fill-current text-gray-500"
        style={{ marginBottom: '1px' }} //input border
        type="button"
        onClick={increase}
      >
        <Icon name="add" />
      </button>
    </div>
  )
}

export default NumberInput

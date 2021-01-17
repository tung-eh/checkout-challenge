import React from 'react'

import Icon from './Icon'

// Copy from https://gist.github.com/gordonbrander/2230317
const generateId = () => '_' + Math.random().toString(36).substr(2, 9)

const Input = ({ label, icon, id, ...props }) => {
  const inputId = id || generateId()

  return (
    <div className="relative flex flex-col mb-4">
      {label && (
        <label
          className="font-bold text-xs text-gray-500 mb-1"
          htmlFor={inputId}
        >
          {label}
        </label>
      )}
      <input
        className="border border-gray-500 placeholder-gray-800 rounded-xl outline-none font-bold p-4 pl-14"
        id={inputId}
        {...props}
      />
      <Icon
        className="absolute bottom-4 left-4 fill-current text-gray-500 pointer-events-none"
        name={icon}
        style={{ marginBottom: '1px' }} //input border
      />
    </div>
  )
}

export default Input

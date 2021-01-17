import React from 'react'

import Icon from './Icon'

// Copy from https://gist.github.com/gordonbrander/2230317
const generateId = () => '_' + Math.random().toString(36).substr(2, 9)

const TextInput = ({ label, icon, ...props }) => (
  <div className="relative flex flex-col mb-4">
    <label className="font-bold text-xs text-gray-500 mb-1" htmlFor={props.id}>
      {label}
    </label>
    <input
      className="border border-gray-500 placeholder-gray-800 rounded-xl outline-none font-bold text-gray-700  p-4 pl-14"
      {...props}
    />
    <Icon
      className="absolute bottom-4 left-4 fill-current text-gray-500 pointer-events-none"
      name={icon}
      style={{ marginBottom: '1px' }} //input border
    />
  </div>
)

const CheckboxInput = ({ label, ...props }) => (
  <div className="flex items-center mb-4">
    <input
      className="appearance-none border border-gray-500 rounded checked:bg-yellow-500 checked:border-transparent w-5 h-5"
      type="checkbox"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e")`,
      }}
      {...props}
    />
    <label className="font-bold text-xs text-gray-500 ml-3" htmlFor={props.id}>
      {label}
    </label>
  </div>
)

const MAP_COMPONENT = {
  checkbox: CheckboxInput,
}

const Input = ({ id, ...props }) => {
  const inputId = id || generateId()

  const Component = MAP_COMPONENT[props.type] || TextInput

  return <Component id={inputId} {...props} />
}

export default Input

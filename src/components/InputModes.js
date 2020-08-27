import React from "react"

const InputModes = () => {
  return (
    <div className="step--container">
      <p>inputmode=decimal</p>
      <input className="input" inputmode="decimal" />
      <code>inputmode=email</code>

      <input className="input" inputmode="email" />

      <code>inputmode=none</code>

      <input className="input" inputmode="none" />

      <code>inputmode=numeric</code>

      <input className="input" inputmode="numeric" />

      <code>inputmode=search</code>

      <input className="input" inputmode="search" />

      <code>inputmode=tel</code>

      <input className="input" inputmode="tel" />

      <code>inputmode=url</code>

      <input className="input last-element" inputmode="url" />
        
    </div>
  )
}

export default InputModes

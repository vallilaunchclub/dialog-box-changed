import React from "react"
import { Field, ErrorMessage } from "formik"

function Select(props) {
  const { label, name, options, ...rest } = props
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field as="select" id={name} name={name} {...rest}>
        {options.map(option => {
          return (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          )
        })}
      </Field>
      <span className="text-danger">
        <ErrorMessage name={name} />
      </span>
    </div>
  )
}

export default Select;
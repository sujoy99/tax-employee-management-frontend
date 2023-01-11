import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from '../text/TextError'

function Select (props) {
  const { label, name, options,isSelectAny, ...rest } = props
  return (
    <div className='form-group row'>
      {label ? 
      <label className="control-label col-sm-4 font-weight-bold" htmlFor={name}>{label}</label> 
      : ''}
      

       <div className="col-sm-8">
      <Field as='select' id={name} name={name} {...rest}>
        {
          isSelectAny && (
            <option  value={''}>
            {'--Select Any--'}
          </option>
          )
        }
        {options.map(option => {
          return (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          )
        })}
      </Field>
      <ErrorMessage component={TextError} name={name} />
    </div>
    </div>
  )
}

export default Select
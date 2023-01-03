import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from '../text/TextError'

const Input = (props) => {
  const { label, name, placeHolder, ...rest } = props
  return (
    <div className='form-group row'>
      <label htmlFor={name} className="control-label col-sm-4 font-weight-bold">{label} :</label>
      <div className="col-sm-8">
        <Field id={name} name={name} placeholder={placeHolder} {...rest} />
        <ErrorMessage component={TextError} name={name} />
      </div>

    </div>
  )
}

export default Input

import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from '../text/TextError'

const Input = (props) => { 
  const { label, name, placeHolder, inputStyle, labelStyle, ...rest } = props

  // if(!isStyle){
  //   <Field id={name} name={name} placeholder={placeHolder} {...rest} />
  // }
  // if(!isStyle){
  //   return
  // }else{

  // }
  return (
    
    <div className='form-group row'>
      
      {label ? 
      <label htmlFor={name} className={`control-label font-weight-bold ${labelStyle ? labelStyle : ""}`}>{label} </label> 
      : ''}
      
      {/* className={`banner ${active ? "active" : ""}`} */}
      <div className={inputStyle ? inputStyle : "col-sm-8"}>
        <Field id={name} name={name} placeholder={placeHolder} {...rest} />
        <ErrorMessage component={TextError} name={name} />
      </div>

    </div>
    
    
  )
}

export default Input

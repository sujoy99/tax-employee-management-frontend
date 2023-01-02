import React from 'react';
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik';
import * as Yup from 'yup';
//import TextError from './TextError';

const initialValues = {
        salaryType: [{name:''}]
    }

const onSubmit = values => {
    console.log("v::",values);
}


// const validationSchema = Yup.object({
//     name: Yup.string().required('Required')
// })
const validationSchema = Yup.object().shape({
    salaryType: Yup.array().of(Yup.object().shape({
        name: Yup.string().required('Required')
}))
})

function SalaryTypeForm(){
    
    //console.log('Form values', formik.values)

    
    return (
        <Formik 
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        >
            {
                ({values, errors}) => (
                    <Form>
                        {console.log("error", errors)}
            <div className='form-control'>
                <label>Salary Type</label>
                <FieldArray 
                    name='salaryType'
                    
                >
                    {
                        (fieldArrayProps) => {
                           console.log('fieldArrayProps', fieldArrayProps)
                           const {push,remove, form} = fieldArrayProps
                           const {values} = form
                           const {salaryType} = values
                           return (
                            <div>
                            {salaryType.map((salaryTypes,index) => (
                                <div key={index}>
                                <Field name={`salaryType[${index}].name`} type='text' placeholder='Enter Salary Type'/>
                                <div className='text-danger'>
                                <ErrorMessage name={`salaryType.${index}.name`} />
                                </div>
                               
                          <br />
                                
                                {index > 0 && (
                                    <button type='button' onClick={() => remove(index)}>{' '} - {' '}
                                    </button>
                                    
                                )}
                                
                                <button type='button' onClick={() => push("")}> + </button>

                                
                                
                                </div>
                           ))}
                           
                           </div>  
                            )
                    }}
                </FieldArray>
            </div>
                <button type='submit'>Submit</button>
            </Form>
                )
            }
            
        </Formik>
    )
}


export default SalaryTypeForm;
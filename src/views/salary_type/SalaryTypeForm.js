import React from 'react';
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik';
import * as Yup from 'yup';
//import TextError from './TextError';

const initialValues = {
        salaryType: [{name:''}]
    }

const onSubmit = values => {
    console.log(values);
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
            <Form>
            {/* <div className="form-control"  >
                <label htmlFor='name'>Salary Type</label>
                <Field 
                    type='text'  
                    id='name' 
                    name='name'
                    placeholder='Enter Salary Type'
                    />
                <ErrorMessage name='name' component={TextError}/>
            </div> */}
            <div className='form-control'>
                <label>Salary Type</label>
                <FieldArray 
                    name='salaryType'
                    
                >
                    {
                        (fieldArrayProps) => {
                           console.log('fieldArrayProps', fieldArrayProps)
                           const {push,remove, form,ErrorMessage} = fieldArrayProps
                           const {values} = form
                           const {salaryType} = values
                           return (
                            <div>
                            {salaryType.map((salaryTypes,index) => (
                                <div key={index}>
                                <Field name={`salaryType[${index}].name`} type='text' placeholder='Enter Salary Type'/>
                                
                                {index > 0 && (
                                    <button type='button' onClick={() => remove(index)}>{' '} - {' '}
                                    </button>
                                    
                                )}
                                {ErrorMessage.salaryType[index].name}
                                <button type='button' onClick={() => push({name: ''})}> + </button>
                                
                                </div>
                           ))}
                           
                           </div>
                            )
                    }}
                </FieldArray>
            </div>
                <button type='submit'>Submit</button>
            </Form>
        </Formik>
    )
}


export default SalaryTypeForm;
import React from 'react'
import { Formik, Form, FieldArray, ErrorMessage, Field } from 'formik'
import { Navbar, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faTimes, faUndo } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

import FormikControl from '../../components/form/FormikControl'
import EmployeeSalaryTable from './EmployeeSalaryTable';

const EmployeeSalaryForm = (props) => {
    console.log("p:", props)
    const { onChangeTaxYear, values, setValues, ...rest } = props

    const dropdownOptions = [
        { key: 'Select an option', value: '' },
        { key: '2021-2022', value: '2021-2022' },
        { key: '2022-2023', value: '2022-2023' },
        { key: '2023-2024', value: '2023-2024' }
    ]

    return (
        <Form className="form-horizontal">
            <FormikControl
                control='select'
                label='Select a topic'
                name='selectOption'
                className='form-control'
                options={dropdownOptions}
                onChange={e => onChangeTaxYear(e, values, setValues)}
            />

            <FieldArray name="lineItems">
                {

                    // (fieldArrayProps) => (
                    //     <EmployeeSalaryTable
                    //     name="lineItems"
                    //   />
                    // )

                    (fieldArrayProps) => {
                        const { push, remove, form } = fieldArrayProps
                        const { values } = form
                        const { lineItems } = values
                        const listLenght = lineItems.length

                        return (
                            <div >
                                {
                                    lineItems.map((lineItem, index) => (
                                        <div key={index} className="container">
                                            <div className="row">
                                                <div className="col-8">
                                                    <FormikControl
                                                        control='input'
                                                        type='text'
                                                        label={`Name(${index + 1})`}
                                                        name={`salaryTypes[${index}].name`}
                                                        className='form-control'
                                                        placeHolder='Enter Salary Type'
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                               
                            </div>
                        )
                    }
                }
            </FieldArray>
            {/* <Col md={12} className='mb-10 mt-10 ml-5'>
                <Button variant='' className='f-right btn-color btn-sm btn-success' type='submit'>
                    <FontAwesomeIcon icon={faSave} className='me-2' /> Submit
                </Button>
                <Button variant='white' className='f-right mr-10 btn-sm btn-secondary mx-2' type='reset'>
                    <FontAwesomeIcon icon={faUndo} className='me-2' /> Reset
                </Button>
                <Link to='/portal/student-type'>
                    <Button variant='white' className='f-right mr-10 btn-sm btn-danger' type='cancle'>
                        <FontAwesomeIcon icon={faTimes} className='me-2' /> Cancel
                    </Button>
                </Link>
            </Col> */}
        </Form>
    )
}

export default EmployeeSalaryForm;
import React from "react";
import {  Form } from 'formik'
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faUndo } from "@fortawesome/free-solid-svg-icons";
import FormikControl from '../../components/form/FormikControl'

const EmployeeForm = (props) => {
    console.log("from", props)

    const dropdownOptions = props.dropDownOptions;

    return (
        <>

            <Form className="form-horizontal">

                <FormikControl
                    control='input'
                    type='text'
                    label='First Name'
                    placeholder='First Name'
                    name='firstName'
                    className='form-control'
                    inputStyle='col-sm-8'
                    labelStyle='text-right col-sm-4'
                />

                <FormikControl
                    control='input'
                    type='text'
                    placeholder='Last Name'
                    label='Last Name'
                    name='lastName'
                    className='form-control'
                    inputStyle='col-sm-8'
                    labelStyle='text-right col-sm-4'
                />

                <FormikControl
                    control='input'
                    type='date'
                    placeholder='Joining Date'
                    label='Joining Date'
                    name='joiningDate'
                    className='form-control'
                    inputStyle='col-sm-8'
                    labelStyle='text-right col-sm-4'
                />

                <FormikControl
                    control='input'
                    type='text'
                    placeholder='Tin Number'
                    label='Tin Number'
                    name='tinNumber'
                    className='form-control'
                    inputStyle='col-sm-8'
                    labelStyle='text-right col-sm-4'
                />

                <FormikControl
                    control='select'
                    label='Salary Structure'
                    name='salaryStructure'
                    className='form-control'
                    options={dropdownOptions}
                    isSelectAny='true'
                    selectStyle='col-sm-8'
                    labelStyle='text-right col-sm-4'
                />
                <div className='float-right'>
                    <Button variant='white' className='f-right mr-10 btn-sm btn-secondary mx-2' type='reset'>
                        <FontAwesomeIcon icon={faUndo} className='me-2' /> Reset
                    </Button>
                    <Button variant='' className='f-right btn-color btn-sm btn-success' type='submit'>
                        <FontAwesomeIcon icon={faSave} className='me-2' /> Submit
                    </Button>

                </div>

            </Form>
        </>
    )
}


export default EmployeeForm;
import React from "react";
import { Formik, Form, FieldArray, ErrorMessage, Field } from 'formik'
import { Navbar, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faTimes, faUndo } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import FormikControl from '../../components/form/FormikControl'
import { ToastContainer, toast } from 'react-toastify';

const EmployeeForm = (props) => {

    const dropdownOptions = props.dropDownOptions;

    return (
        <>

            <Form className="form-horizontal">

                <FormikControl
                    control='input'
                    type='text'
                    label='First Name'
                    name='firstName'
                    className='form-control'
                    inputStyle='col-sm-8'
                    labelStyle='text-right col-sm-4'
                />

                <FormikControl
                    control='input'
                    type='text'
                    label='Last Name'
                    name='lastName'
                    className='form-control'
                    inputStyle='col-sm-8'
                    labelStyle='text-right col-sm-4'
                />

                <FormikControl
                    control='input'
                    type='date'
                    label='Joining Date'
                    name='joiningDate'
                    className='form-control'
                    inputStyle='col-sm-8'
                    labelStyle='text-right col-sm-4'
                />

                <FormikControl
                    control='input'
                    type='text'
                    label='Tin Number'
                    name='tinNumber'
                    className='form-control'
                    inputStyle='col-sm-8'
                    labelStyle='text-right col-sm-4'
                />

                <FormikControl
                    control='select'
                    label='Salary Structure'
                    name='salaryStructureId'
                    className='form-control'
                    options={dropdownOptions}
                    isSelectAny='true'
                    selectStyle='col-sm-8'
                    labelStyle='text-right col-sm-4'
                />
                <Row className='float-right'>
                    <Button variant='white' className='f-right mr-10 btn-sm btn-secondary mx-2' type='reset'>
                        <FontAwesomeIcon icon={faUndo} className='me-2' /> Reset
                    </Button>
                    <Button variant='' className='f-right btn-color btn-sm btn-success' type='submit'>
                        <FontAwesomeIcon icon={faSave} className='me-2' /> Submit
                    </Button>

                </Row>

            </Form>
            {/* <ToastContainer /> */}
        </>
    )
}


export default EmployeeForm;
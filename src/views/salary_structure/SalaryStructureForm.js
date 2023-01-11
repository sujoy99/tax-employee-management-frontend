
import React from "react";
import { Formik, Form, FieldArray, ErrorMessage, Field } from 'formik'
import { Navbar, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faTimes, faUndo } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import FormikControl from '../../components/form/FormikControl'
import { ToastContainer, toast } from 'react-toastify';

const SalaryStructureForm = (props) => {

    const dropdownOption = props.dropdownOptions

    return (
        <Form className="form-horizontal">
            <FieldArray name="salaryStructureLineItems">
                {
                    (fieldArrayProps) => {
                        const { push, remove, form } = fieldArrayProps
                        const { values } = form
                        console.log("see :", form)
                        const { salaryStructureLineItems } = values
                        const listLenght = salaryStructureLineItems.length

                        return (
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <FormikControl
                                            control='input'
                                            type='text'
                                            label='Name :'
                                            name='name'
                                            className='form-control'
                                            inputStyle='col-sm-6'
                                            labelStyle='text-right col-sm-4'
                                        />
                                    </div>

                                </div>
                                <div className="row">
                                
                                    {
                                        salaryStructureLineItems.map((salaryStructureLineItem, index) => (
                                            <>
                                            <div className="col-2">

                                            </div>
                                                <div className="col-4">
                                                    <FormikControl
                                                        control='select'
                                                        // label='Salary Structure :'
                                                        name={`salaryStructureLineItems[${index}].salaryTypeId`}
                                                        className='form-control'
                                                        options={dropdownOption}
                                                        isSelectAny='true'
                                                    />
                                                </div>

                                                <div className="col-4">
                                                    <FormikControl
                                                        control='input'
                                                        type='text'
                                                        // label={`Name(${index + 1})`}
                                                        name={`salaryStructureLineItems[${index}].percentage`}
                                                        className='form-control'
                                                        placeHolder='Percentage'
                                                    />
                                                </div>

                                                <div className="col-2">
                                                    {
                                                        (index > 0 && listLenght - 1 === index) && (
                                                            <div className="d-inline mr-1">
                                                                <button type='button' className="btn btn-sm btn-warning my-auto" onClick={() => remove(index)}>{' '} Remove {' '}
                                                                </button>
                                                            </div>
                                                        )
                                                    }
                                                    {
                                                        (listLenght - 1 === index) && (
                                                            <div className="d-inline">
                                                                <button className="btn btn-sm btn-primary my-auto" type='button' onClick={() => push("")}> Add </button>
                                                            </div>
                                                        )
                                                    }
                                                    {
                                                        (listLenght - 1 > index) && (
                                                            <div className="d-inline mr-1">
                                                                <button type='button' className="btn btn-sm btn-warning my-auto" onClick={() => remove(index)}>{' '} Remove {' '}
                                                                </button>
                                                            </div>
                                                        )
                                                    }
                                                </div>

                                            </>
                                        ))
                                    }
                                </div>
                                

                                <Col md={12} className='mb-10 mt-10 ml-5 f-right'>
                                    <Button variant='' className='f-right btn-color btn-sm btn-success' type='submit'>
                                        <FontAwesomeIcon icon={faSave} className='me-2' /> Submit
                                    </Button>
                                    <Button variant='white' className='f-right mr-10 btn-sm btn-secondary mx-2' type='reset'>
                                        <FontAwesomeIcon icon={faUndo} className='me-2' /> Reset
                                    </Button>

                                </Col>
                            </div>
                        )
                    }
                }
            </FieldArray>

        </Form>
    )
}

export default SalaryStructureForm;
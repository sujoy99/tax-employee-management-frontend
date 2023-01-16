
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
                        const { values, isSubmitting } = form
                        const { salaryStructureLineItems } = values
                        const listLenght = salaryStructureLineItems.length

                        return (
                            <div className="container">
                                <div className="row">
                                    <div className="col-10 mt-3">
                                        <div className="row">
                                            <div className="col-12">
                                                <FormikControl
                                                    control='input'
                                                    type='text'
                                                    label='Name :'
                                                    name='name'
                                                    className='form-control'
                                                    inputStyle='col-sm-8'
                                                    labelStyle='text-right col-sm-4'
                                                />
                                            </div>

                                            {
                                                salaryStructureLineItems.map((salaryStructureLineItem, index) => (
                                                    <div className="row col-12" key={index}>
                                                        {/* {
                                                            salaryStructureLineItem?.id && (
                                                                <FormikControl
                                                                    control='input'
                                                                    type='hidden'
                                                                    name={`salaryStructureLineItems[${index}].id`}
                                                                    className='form-control'
                                                                    placeHolder=''
                                                                    value={salaryStructureLineItem.id}
                                                                />
                                                            )
                                                        } */}

                                                        <div className="offset-md-4 col-4 pl-4">
                                                            <FormikControl
                                                                control='select'
                                                                // label='Salary Structure :'
                                                                name={`salaryStructureLineItems[${index}].salaryType`}
                                                                className='form-control'
                                                                options={dropdownOption}
                                                                isSelectAny='true'
                                                                selectStyle='col-sm-12'
                                                                
                                                            />
                                                        </div>

                                                        <div className="col-3">
                                                            <FormikControl
                                                                control='input'
                                                                type='text'
                                                                // label={`Name(${index + 1})`}
                                                                name={`salaryStructureLineItems[${index}].percentage`}
                                                                className='form-control'
                                                                placeHolder='Percentage'
                                                                inputStyle='col-sm-12'
                                                            />
                                                        </div>

                                                        <div className="col-1">
                                                            {
                                                                (index > 0 && listLenght - 1 === index) && (
                                                                    <div className="d-inline mr-1">
                                                                        <button type='button' className="btn btn-sm btn-warning my-auto" onClick={() => {remove(index); salaryStructureLineItems.splice(index, 1)}}>{' '} Remove {' '}
                                                                        </button>
                                                                    </div>
                                                                )
                                                            }
                                                            {
                                                                (listLenght - 1 > index) && (
                                                                    <div className="d-inline mr-1">
                                                                        <button type='button' className="btn btn-sm btn-warning my-auto" onClick={() => {remove(index); salaryStructureLineItems.splice(index, 1)}}>{' '} Remove {' '}
                                                                        </button>
                                                                    </div>
                                                                )
                                                            }
                                                        </div>

                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <button className="btn btn-sm btn-primary my-auto" type='button' onClick={() => push("")}> Add </button>
                                    </div>

                                </div>

                                <Row className='d-flex justify-content-center ml-5'>
                                    <Button variant='white' className='f-right mr-10 btn-sm btn-secondary mx-2' type='reset'>
                                        <FontAwesomeIcon icon={faUndo} className='me-2' /> Reset
                                    </Button>
                                    <Button variant='' className='f-right btn-color btn-sm btn-success' type='submit' disabled={isSubmitting}>
                                        <FontAwesomeIcon icon={faSave} className='me-2' /> Submit
                                    </Button>

                                </Row>
                            </div>
                        )
                    }
                }
            </FieldArray>

        </Form>
    )
}

export default SalaryStructureForm;
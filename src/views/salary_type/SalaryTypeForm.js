import React from 'react'
import { Formik, Form, FieldArray, ErrorMessage, Field } from 'formik'
import { Navbar, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faTimes, faUndo } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

import FormikControl from '../../components/form/FormikControl'

const SalaryTypeForm = () => {

    // return (
    //     <Form>
    //         <Row>
    //             <Col md={6}  className='mb-10'>
    //                 <FormikControl
    //                     control='input'
    //                     type='email'
    //                     label='Email'
    //                     name='email'
    //                     className='form-control'
    //                 />

    //             </Col>
    //             <Col md={6} className='mb-10'>
    //                 <FormikControl
    //                     control='input'
    //                     type='email'
    //                     label='Email'
    //                     name='email'
    //                 />
    //             </Col>
    //             <Col md={12} className='mb-10 mt-10'>
    //                 <Button variant='' className='f-right btn-color' type='submit'>
    //                     <FontAwesomeIcon icon={faSave} className='me-2' /> Submit
    //                 </Button>
    //                 <Button variant='white' className='f-right mr-10' type='reset'>
    //                     <FontAwesomeIcon icon={faUndo} className='me-2' /> Reset
    //                 </Button>
    //                 {/* <Link to='/portal/student-type'>
    //                     <Button variant='white' className='f-right mr-10' type='cancle'>
    //                         <FontAwesomeIcon icon={faTimes} className='me-2' /> Cancel
    //                     </Button>
    //                 </Link> */}
    //             </Col>
    //         </Row>
    //     </Form>
    // );
    return (
        <Form className="form-horizontal">
            <FieldArray name="salaryTypes">
                {
                    (fieldArrayProps) => {
                        const { push, remove, form } = fieldArrayProps
                        const { values } = form
                        const { salaryTypes } = values
                        
                        return (
                            <div >
                                {
                                    salaryTypes.map((salaryType, index) => (
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
                                                <div className="col-4">
                                                {index > 0 && (
                                                    <div className="d-inline mr-1">
                                                        <button type='button' className="btn btn-sm btn-warning my-auto" onClick={() => remove(index)}>{' '} Remove {' '}
                                                        </button>
                                                    </div>

                                                    )}
                                                    <div className="d-inline">
                                                    <button className="btn btn-sm btn-primary my-auto" type='button' onClick={() => push("")}> Add </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))

                                }
                                <Col md={12} className='mb-10 mt-10 ml-5'>
                                    <Button variant='' className='f-right btn-color btn-sm btn-success' type='submit'>
                                        <FontAwesomeIcon icon={faSave} className='me-2'/> Submit
                                    </Button>
                                    <Button variant='white' className='f-right mr-10 btn-sm btn-secondary mx-2' type='reset'>
                                        <FontAwesomeIcon icon={faUndo} className='me-2'/> Reset
                                    </Button>
                                    <Link to='/portal/student-type'>
                                        <Button variant='white' className='f-right mr-10 btn-sm btn-danger' type='cancle'>
                                            <FontAwesomeIcon icon={faTimes} className='me-2'/> Cancel
                                        </Button>
                                    </Link>
                                </Col>
                            </div>
                        )
                    }
                }
            </FieldArray>
        </Form>
    )
}

export default SalaryTypeForm;
import React from 'react'
import { Formik, Form } from 'formik'
import { Navbar, Row, Col, Button } from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faSave, faTimes, faUndo } from "@fortawesome/free-solid-svg-icons";

import FormikControl from '../../components/form/FormikControl'

const SalaryTypeForm = () => {

    return (
        <Form>
            <Row>
                <Col md={6}  className='mb-10'>
                    <FormikControl
                        control='input'
                        type='email'
                        label='Email'
                        name='email'
                        className='form-control'
                    />

                </Col>
                <Col md={6} className='mb-10'>
                    <FormikControl
                        control='input'
                        type='email'
                        label='Email'
                        name='email'
                    />
                </Col>
                <Col md={12} className='mb-10 mt-10'>
                    <Button variant='' className='f-right btn-color' type='submit'>
                        <FontAwesomeIcon icon={faSave} className='me-2' /> Submit
                    </Button>
                    <Button variant='white' className='f-right mr-10' type='reset'>
                        <FontAwesomeIcon icon={faUndo} className='me-2' /> Reset
                    </Button>
                    {/* <Link to='/portal/student-type'>
                        <Button variant='white' className='f-right mr-10' type='cancle'>
                            <FontAwesomeIcon icon={faTimes} className='me-2' /> Cancel
                        </Button>
                    </Link> */}
                </Col>
            </Row>
        </Form>
    );
}

export default SalaryTypeForm;
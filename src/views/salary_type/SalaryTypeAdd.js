import React from 'react'
import { Formik, Form } from 'formik'
import { Card } from "react-bootstrap";
import ProgressBar from "react-topbar-progress-indicator";

import SalaryTypeForm from './SalaryTypeForm'
import {SalaryType} from './SalaryType';


const SalaryTypeAdd = () => {

    // return (
    //     <SalaryTypeForm />
    // );

    const onSubmit = values => {
        console.log('Form data', values)
    }

    return (
        <>
            <Card border='white' className='table-wrapper table-responsive'>
                <Card.Body>
                    {/* {loading && <ProgressBar />} */}
                    <Formik
                        initialValues={SalaryType}
                        validationSchema={SalaryType.validator()}
                        onSubmit={onSubmit}>
                        {(props) => {
                            return <SalaryTypeForm formType="add" {...props} />;
                        }}
                    </Formik>
                </Card.Body>
            </Card>
        </>
    )
}

export default SalaryTypeAdd;
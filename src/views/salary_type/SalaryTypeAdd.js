import React from 'react'
import { Formik, Form } from 'formik'

import { Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";


import DefaultCard from '../../components/card/default/DefaultCard'
import SalaryTypeForm from './SalaryTypeForm'
import { SalaryType } from './SalaryType';
import { Link } from 'react-router-dom';


const SalaryTypeAdd = () => { 

    const cardProps = {
        title: "Add New Student Type",
        headerSlot: () => (
            <>
                <Link to='#'>
                    <Button variant='link' className='f-right btn-sm p-1'>
                        <FontAwesomeIcon icon={faList} className='me-2' />
                        View Student Type List
                    </Button>
                </Link>
            </>
        ),
    };


    const onSubmit = values => {
        console.log('Form data', values)
    }


    return (
        <DefaultCard className='mb-50' {...cardProps}>
            <Card border='white' className='table-wrapper table-responsive'>
                <Card.Body className="shadow p-3 mb-5 bg-white rounded container">
                    <div className="row">
                    <div className="col-3"></div>
                        {/* {loading && <ProgressBar />} */}
                        <div className="col-6">
                            <Formik
                                initialValues={SalaryType}
                                validationSchema={SalaryType.validator()}
                                onSubmit={onSubmit}>
                                {(props) => {
                                    return <SalaryTypeForm formType="add" {...props} />;
                                }}
                            </Formik>
                        </div>

                        <div className="col-3"></div>
                    </div>

                </Card.Body>
            </Card>
        </DefaultCard>
    )
}

export default SalaryTypeAdd;
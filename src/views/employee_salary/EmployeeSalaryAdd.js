import React from 'react'
import { Formik, Form } from 'formik'
import { Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";

import DefaultCard from '../../components/card/default/DefaultCard'
import { EmployeeSalary } from './EmployeeSalary';
import EmployeeSalaryForm from './EmployeeSalaryForm';
import { getSalaryObject } from '../../helpers/utils';
import { Link } from 'react-router-dom';


const EmployeeSalaryAdd = () => {

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
        console.log(getSalaryObject(2022, 2023));
        console.log('Form data', values)
    }

    const onChangeTaxYear = (e, values, setValues) => {
            console.log("hello", e.target.value)
            console.log("hi:", values);
            if(e.target.value){
                const [fromYear, toYear] = e.target.value.split('-');


                // update dynamic form
                // const tickets = [...values.lineItems];
                // const numberOfTickets = e.target.value || 0;
                // const previousNumber = parseInt(field.value || '0');
                // if (previousNumber < numberOfTickets) {
                //     for (let i = previousNumber; i < numberOfTickets; i++) {
                //         tickets.push({ name: '', email: '' });
                //     }
                // } else {
                //     for (let i = previousNumber; i >= numberOfTickets; i--) {
                //         tickets.splice(i, 1);
                //     }
                // }
                // setValues({ ...values, tickets });

                const lineItems = getSalaryObject(fromYear, toYear);

                setValues({ ...values, lineItems });

                // call formik onChange method
                // field.onChange(e);
            }else{
                setValues({ ...values, lineItems : [] });
            }
            
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
                                initialValues={EmployeeSalary}
                                // validationSchema={SalaryType.validator()}
                                onSubmit={onSubmit}>
                                {(props) => {
                                    return <EmployeeSalaryForm formType="add" onChangeTaxYear={onChangeTaxYear} {...props} />;
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

export default EmployeeSalaryAdd;
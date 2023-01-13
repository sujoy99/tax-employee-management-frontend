import React, { useState, useEffect, useCallback } from 'react'
import { Formik, Form } from 'formik'
import { Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";

import DefaultCard from '../../components/card/default/DefaultCard'
import { redirect, useParams, useNavigate } from 'react-router-dom';
import EmployeeForm from './EmployeeForm'
import { Employee } from './Employee';
import { Link } from 'react-router-dom';
import axiosService from '../../helpers/axiosService';
// import { Toaster } from '../../components/toaster/Toaster';
import { SuccessToast, ErrorToast } from '../../components/toaster/Toaster';
import { ToastContainer, toast } from 'react-toastify';


const EmployeeAdd = () => {
    const { id, viewOnly } = useParams();
    console.log("id is :", id);
    console.log("id is :", viewOnly);
    const [salaryStructureList, setSalaryStructureLists] = useState([]);
    const [employee, setEmployee] = useState({});
    const [isEdit, setIsEdit] = useState(true)

    const navigate = useNavigate();

    const fetchData = useCallback(async () => {
        const response = await axiosService.get('http://10.0.2.230:8080/salary-structure/list');
        console.log("response  :: ", response);
        setSalaryStructureLists(response.data);
    }, [])

    const fetchDataForViewOrEdit = useCallback(async () => {
        const response = await axiosService.get(`http://10.0.2.230:8080/employee/getEmployee?id=${id}`).then(response => {
            // setEmployee(response.data)
            console.log("hello ", response)
            setEmployee(Employee.fromJson(response.data));
            console.log("b", response);
            console.log("a", employee);
            setIsEdit(false)
        });

        // setSalaryStructureLists(response.data);

    }, [employee])


    useEffect(() => {
        fetchData()
        if (id != undefined && id) {
            console.log("dhukchi")
            fetchDataForViewOrEdit()
        }
    }, []);

    const cardProps = {
        title: "Add New Employee ",
        headerSlot: () => (

            <Link to='/employee'>
                <Button variant='link' className='f-right btn-sm p-1'>
                    <FontAwesomeIcon icon={faList} className='me-2' />
                    View Employee List
                </Button>
            </Link>

        ),
    };

    const onSubmit = async values => {
        try {
            // console.log("value ", values)
            // const response = await axiosService.post('http://localhost:8080/employee/save', values);
            // const status = response.status;
            // if (status == 200) {
            //     Toaster.successToast(response.message)
            // }

            await axiosService.post('http://localhost:8080/employee/save', values)
            .then( (response) => {
                const status = response.status;
                if(status == 200) {
                    SuccessToast(response.message, () => navigate("/employee"))
                }
                
                // console.log("One")
                // const status = response.status;
                // if (status == 200) {
                //     navigate('/employee')
                //     // Toaster.successToast(response.message)
                //     SuccessToast('hello','/employee')

                //  }
            })


        } catch (error) {
            console.log(" Error Occured ", error);
        }

        //    return <pre>{JSON.stringify(values)}</pre>
        console.log(values)
    }
    console.log("employee ", employee)

    return (
        <DefaultCard className='mb-50' {...cardProps}>
            <Card border='white' className='table-wrapper table-responsive'>
                <Card.Body className="shadow p-3 mb-5 bg-white rounded container">
                    <div className="row">
                        <div className="col-3"></div>
                        {/* {loading && <ProgressBar />} */}
                        <div className="col-6">
                            <Formik
                                initialValues={employee || Employee}
                                enableReinitialize
                                validationSchema={Employee.validator()}
                                onSubmit={onSubmit}
                            >
                                {(props) => {
                                    return <EmployeeForm dropDownOptions={salaryStructureList} formType="add" {...props} />;
                                }}
                            </Formik>
                        </div>

                        <div className="col-3"></div>
                    </div>
                    <ToastContainer />
                </Card.Body>
            </Card>
        </DefaultCard>
    )
}

export default EmployeeAdd;
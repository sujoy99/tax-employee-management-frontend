import { faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Formik } from 'formik';
import React, { useCallback, useEffect, useState } from 'react';
import { Button, Card } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import DefaultCard from '../../components/card/default/DefaultCard';
import { SuccessToast } from '../../components/toaster/Toaster';
import axiosService from '../../helpers/axiosService';
import { SalaryStructure } from './SalaryStructure';
import SalaryStructureForm from './SalaryStructureForm';
import SalaryStructureService from './SalaryStructureService';
import SalaryTypeService from '../salary_type/SalaryTypeService';



const SalaryStructureAdd = () => {
    const [salaryTypeList, setSalaryTypeLists] = useState([]);

    const fetchSalaryTypeData = async () => {
        const response = await SalaryTypeService.getSalaryTypes();
        setSalaryTypeLists(response.data);
    }

    useEffect(() => {
        fetchSalaryTypeData()
    }, []);

    const cardProps = {
        title: "Add New Salary Structure ",
        headerSlot: () => (

            <Link to='/salary-structure'>
                <Button variant='link' className='f-right btn-sm p-1'>
                    <FontAwesomeIcon icon={faList} className='me-2' />
                        View Salary Structure List
                    </Button>
            </Link>

        ),
    };

    const navigate = useNavigate();

    const onSubmit = async (values, onSubmitProps) => {
        try {
            // const response = await axiosService.post('http://localhost:8080/salary-structure/save',values);
            // console.log("what", values);
            // const status = response.status;
            // console.log("response ", response);
            // if(status == 200) {
            //     // Toaster.successToast(response.message)
            //     SuccessToast(response.message, () => navigate("/salary-structure"))
            // }
            const response = await SalaryStructureService.createSalaryStructure(values)
            console.log("response", response);
            if (response.status === 200) {
                onSubmitProps.setSubmitting(false)
                SuccessToast(response.message, () => navigate("/salary-structure"));
            }

        } catch (error) {
            console.log(" Error Occured ", error);
        }

        //    return <pre>{JSON.stringify(values)}</pre>
    }

    return (
        <DefaultCard className='mb-50' {...cardProps}>
            <Card border='white' className='table-wrapper table-responsive'>
                <Card.Body className="shadow p-3 mb-5 bg-white rounded container">
                    <div className="row">
                        {/* <div className="col-2"></div> */}
                        <div className=""></div>
                        {/* {loading && <ProgressBar />} */}
                        <div className="col-10">
                            <Formik
                                initialValues={SalaryStructure}
                                validationSchema={SalaryStructure.validator()}
                                onSubmit={onSubmit}>
                                {(props) => {
                                    // return <EmployeeForm dropDownOptions = {salaryStructureList} formType="add" {...props} />;
                                    return <SalaryStructureForm dropdownOptions={salaryTypeList} formType="add" {...props} />
                                }}
                            </Formik>
                        </div>

                        {/* <div className="col-2"></div> */}
                    </div>
                    <ToastContainer />
                </Card.Body>
            </Card>
        </DefaultCard>
    )
}

export default SalaryStructureAdd;
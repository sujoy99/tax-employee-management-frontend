import { faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { Button, Card } from "react-bootstrap";
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import DefaultCard from '../../components/card/default/DefaultCard';
import SalaryTypeService from '../salary_type/SalaryTypeService';
import { SalaryStructure } from './SalaryStructure';
import SalaryStructureForm from './SalaryStructureForm';
import SalaryStructureService from './SalaryStructureService';
import { SuccessToast } from "../../components/toaster/Toaster";


const SalaryStructureEdit = () => {

    let { id } = useParams();
    const navigate = useNavigate();
    const [salaryStructure, setSalaryStructure] = useState(null)
    const [salaryTypeList, setSalaryTypeLists] = useState([]);

    const fetchSalaryTypeData = async () => {
        const response = await SalaryTypeService.getSalaryTypes();
        setSalaryTypeLists(response.data);
    }

    async function fetchSalaryStructureData() {
        const response = await SalaryStructureService.getSalaryStructureById(id);
        if (response.status === 200) {
            setSalaryStructure(response.data)
        }
    }

    useEffect(() => {
        fetchSalaryTypeData();
        fetchSalaryStructureData();
    }, []);

    const cardProps = {
        title: "Edit Salary Structure ",
        headerSlot: () => (

            <Link to='/salary-structure'>
                <Button variant='link' className='f-right btn-sm p-1'>
                    <FontAwesomeIcon icon={faList} className='me-2' />
                        View Salary Structure List
                    </Button>
            </Link>

        ),
    };

    const onSubmit = async (values, onSubmitProps) => {
        try {
            console.log("ok", values)
            const response = await SalaryStructureService.updateSalaryStructure(values, id)
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
                        <div className=""></div>
                        {/* {loading && <ProgressBar />} */}
                        <div className="col-10">
                            { 
                                salaryStructure && (
                                    <Formik
                                        initialValues={SalaryStructure.fromJson(salaryStructure)}
                                        validationSchema={SalaryStructure.validator()}
                                        onSubmit={onSubmit}
                                        enableReinitialize={true}
                                    >
                                        {(props) => {
                                            return <SalaryStructureForm dropdownOptions={salaryTypeList}  {...props} />
                                        }}
                                    </Formik>
                                )
                            }

                        </div>
                    </div>
                    <ToastContainer />
                </Card.Body>
            </Card>
        </DefaultCard>
    )
}

export default SalaryStructureEdit

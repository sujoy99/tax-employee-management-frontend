import React,{useState,useEffect, useCallback} from 'react'
import { Formik, Form } from 'formik'
import { Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";

import DefaultCard from '../../components/card/default/DefaultCard'
import { SalaryStructure } from './SalaryStructure';
import SalaryStructureForm from './SalaryStructureForm'
import { Link } from 'react-router-dom';
import axiosService from '../../helpers/axiosService';
import { Toaster } from '../../components/toaster/Toaster';
import { ToastContainer, toast } from 'react-toastify';


const SalaryStructureAdd = () => {
    const [salaryTypeList, setSalaryTypeLists] = useState([]);

    const fetchData = useCallback(async () => {
        const response = await axiosService.get('http://localhost:8080/salary-type/list');
        console.log("response  :: ", response);
        setSalaryTypeLists(response.data);
      },[])

    useEffect(() => {
        fetchData()
        
      },[]);

    const cardProps = {
        title: "Add New Salary Structure ",
        headerSlot: () => (
            
                <Link to='#'>
                    <Button variant='link' className='f-right btn-sm p-1'>
                        <FontAwesomeIcon icon={faList} className='me-2' />
                        View Salary Structure List
                    </Button>
                </Link>
            
        ),
    };

    const onSubmit = async values => {
        try{
            console.log("hello ", values)
            const response = await axiosService.post('http://localhost:8080/salary-structure/save',values);
            console.log("what", values);
            const status = response.status;
            console.log("response ", response);
            if(status == 200) {
                Toaster.successToast(response.message)
            }
            
        } catch(error){
            console.log(" Error Occured ", error);
        }
            
    //    return <pre>{JSON.stringify(values)}</pre>
    }

    return (
        <DefaultCard className='mb-50' {...cardProps}>
            <Card border='white' className='table-wrapper table-responsive'>
                <Card.Body className="shadow p-3 mb-5 bg-white rounded container">
                    <div className="row">
                    <div className="col-2"></div>
                        {/* {loading && <ProgressBar />} */}
                        <div className="col-8">
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

                        <div className="col-2"></div>
                    </div>
                    <ToastContainer />
                </Card.Body>
            </Card>
        </DefaultCard>
    )
}

export default SalaryStructureAdd;
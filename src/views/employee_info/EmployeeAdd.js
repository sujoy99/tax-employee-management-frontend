import React,{useState,useEffect, useCallback} from 'react'
import { Formik, Form } from 'formik'
import { Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";

import DefaultCard from '../../components/card/default/DefaultCard'
import EmployeeForm from './EmployeeForm'
import { Employee } from './Employee';
import { Link } from 'react-router-dom';
import axiosService from '../../helpers/axiosService';
import { Toaster } from '../../components/toaster/Toaster';
import { ToastContainer, toast } from 'react-toastify';


const EmployeeAdd = () => {

    const [salaryStructureList, setSalaryStructureLists] = useState([]);

    const fetchData = useCallback(async () => {
        const response = await axiosService.get('http://localhost:8080/salary-structure/list');
        console.log("response  :: ", response);
        setSalaryStructureLists(response.data);
      },[])

    useEffect(() => {
        fetchData()
        
      },[]);

    const cardProps = {
        title: "Add New Employee ",
        headerSlot: () => (
            
                <Link to='#'>
                    <Button variant='link' className='f-right btn-sm p-1'>
                        <FontAwesomeIcon icon={faList} className='me-2' />
                        View Student Type List
                    </Button>
                </Link>
            
        ),
    };

    const onSubmit = async values => { console.log("hello")
        try{
            const response = await axiosService.post('http://localhost:8080/user/save',values);
            console.log("what", response);
            const status = response.status;
            if(status == 200) {
                Toaster.successToast(response.message)
            }
            
        } catch(error){
            console.log(" Error Occured ", error);
        }
            
    //    return <pre>{JSON.stringify(values)}</pre>
    console.log(values)
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
                                initialValues={Employee}
                                validationSchema={Employee.validator()}
                                onSubmit={onSubmit}>
                                {(props) => {
                                    return <EmployeeForm dropDownOptions = {salaryStructureList} formType="add" {...props} />;
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
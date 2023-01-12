import React, {useState} from 'react'
import DefaultCard from '../../components/card/default/DefaultCard'
import { Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import {  Modal} from "react-bootstrap";
import ModalForm from '../../components/popup/ModalForm';
import SalaryTypeAdd from '../salary_type/SalaryTypeAdd'
import { ToastContainer, toast } from 'react-toastify';


const SalaryTypeList = () => {

    const [show, setShow] = useState(false);
    const handleShow = () =>{ console.log("clicked")
        setShow(true); 
    };
    const handleClose = () => setShow(false);

    const cardProps = {
        title: "Manage Salary Type",
        headerSlot: () => (
            <>
                
                <button type="button" data-toggle="modal"  onClick={handleShow} className="btn btn-outline-success float-right ">Add Salary Type</button>
                 
            </>
        ),
    };
    return (
        <>
            <DefaultCard className='mb-50'  {...cardProps}>
            </DefaultCard>
            <ToastContainer />
            {
                show && (
                    <ModalForm show={show} handleClose={handleClose} form={<SalaryTypeAdd handleClose={handleClose} />}  ></ModalForm>
                )
            }


        </>
    )
}

export default SalaryTypeList



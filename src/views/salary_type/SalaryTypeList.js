import React from 'react'
import DefaultCard from '../../components/card/default/DefaultCard'
import { Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';


const SalaryTypeList = () => {

    const cardProps = {
        title: "Manage Salary Type",
        headerSlot: () => (
            <>
                
                <button type="button" class="btn btn-outline-success ">Add Salary Type</button>
                 
            </>
        ),
    };
    return (
        <>
            <DefaultCard className='mb-50'  {...cardProps}>
            </DefaultCard>
        </>
    )
}

export default SalaryTypeList



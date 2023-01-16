import React, { useState, useEffect } from 'react'
import { Link, useParams  } from 'react-router-dom';
import { Card, Button, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faEdit } from "@fortawesome/free-solid-svg-icons";
import DefaultCard from '../../components/card/default/DefaultCard';
import SalaryStructureService from './SalaryStructureService';

const SalaryStructureDetail = () => {

    let { id } = useParams(); 
    const [salaryStructure, setSalaryStructure] = useState(null)

    async function fetchSalaryStructureData() {
        const response = await SalaryStructureService.getSalaryStructureById(id);
        if(response.status === 200){
            setSalaryStructure(response.data)
        }
    }

    useEffect(() => {
        fetchSalaryStructureData()
    }, []);

    const cardProps = {
        title: "Salary Structure Details",
        headerSlot: () => (
            <>
                <Link to='/salary-structure'>
                    <Button variant='link' className='f-right btn-sm p-5\1'>
                        <FontAwesomeIcon icon={faList} className='me-2' /> View Salary Structure
                        List
                    </Button>
                </Link>
            </>
        ),
    };

    return (
        <DefaultCard className='mb-50' {...cardProps}>
            {/* {loading && <ProgressBar />} */}
            <Card border='white' className='table-wrapper'>
                <Card.Body className="mx-auto" style={{minWidth: '360px'}}>
                    {salaryStructure?.id !== undefined && (
                        <Table className='table table-striped table-hover mb-15'>
                            <tbody>
                                <tr>
                                    <td className='border-0 td-width'>
                                        <b>Salary Structure</b>
                                    </td>
                                    <td className='border-0'>{salaryStructure?.name ?? "N/A"}</td>
                                </tr>
                                {
                                    salaryStructure?.salaryStructureLineItems.length > 0 && (
                                        salaryStructure.salaryStructureLineItems.map((item, idx) => (
                                            <tr key={idx}>
                                            <td className='border-0 td-width'>
                                                <b>{item.salaryType.name}</b>
                                            </td>
                                            <td className='border-0'>{item.percentage ?? "N/A"}</td>
                                        </tr>
                                        ))
                                    )
                                }
                            </tbody>
                        </Table>
                    )}
                    <hr />
                    <Link to={`/salary-structure/edit/${salaryStructure?.id}`}>
                        <Button variant='' className='f-right btn-color' type='submit'>
                            <FontAwesomeIcon icon={faEdit} className='me-2' /> Edit Salary Structure
                    </Button>
                    </Link>
                </Card.Body>
            </Card>
        </DefaultCard>
    )
}

export default SalaryStructureDetail

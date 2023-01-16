import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Button, ProgressBar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import CrudAction from '../../components/buttons/CrudAction';
import DefaultCard from '../../components/card/default/DefaultCard';
import BasicTable from '../../components/table/BasicTable';
import SalaryStructureService from './SalaryStructureService';

const SalaryStructureList = () => {
    let navigate = useNavigate();
    const [salaryStructures, setSalaryStructures] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [pageNo, setPageNo] = useState(1);
    const [isLoading, setIsLoading] = useState(true)
    const [meta, setMeta] = useState({})
    const [searchVal, setSearchVal] = useState('')

    const tableProps = {
        headers: [
            { id: "name", label: "Name" },
            { id: "status", label: "Status" },
            { id: "action", label: "Action", width: "120px" },
        ],
        perPage: [10, 20, 30, 40, 50],
        meta: {
            total:0,
            currentPage:0,
            totalPages:0,
            limit: 10
        },

    };

    const cardProps = {
        title: "Salary Structure List",
        headerSlot: () => (
            <>
                <Link to='/salary-structure/add'>
                    <Button variant='link' className='f-right btn-sm btn-color'>
                        <FontAwesomeIcon icon={faPlus} className='me-2' /> Add New Salary Structure
                    </Button>
                </Link>
            </>
        ),
    };

    const onSizeChange = (pageSize) => {
        // setSize(pageSize);
        setLimit(pageSize);

    };

    
    const onSearchByValue = (searchVal) => {
        console.log(" search value : ", searchVal)
        setSearchVal(searchVal);
    };

    // const fetchData = useCallback(async () => {
    //     const response = await axiosService.get(`http://10.0.2.230:8080/user/paging?page=${currentPage}&limit=${limit}&searchVal=${searchVal}`);
    //     console.log("response  :: ", response);
    //     let meta = response.data.meta;
    //     console.log("metaas", tableProps)
    //     setMeta(meta)
    //     setEmployees(response.data.list);
    //     setIsLoading(false);
    //     setPageNo(meta.totalPages);
    //     console.log("ok", tableProps);
    // }, [currentPage, limit, searchVal])

    // useEffect(() => {
    //     fetchData()
    // }, [fetchData])

    useEffect( () => {
        setIsLoading(true);
        // axiosService.get(`http://10.0.2.230:8080/salary-structure/paging?page=${currentPage}&limit=${limit}&searchVal=${searchVal}`).then(response => {           
        //     let meta = response.data.meta;            
        //     setMeta(meta)
        //     setSalaryStructures(response.data.list);
        //     setIsLoading(false);
        //     setPageNo(meta.totalPages);

        // });

        SalaryStructureService.getSalaryStructureWithPaging(`page=${currentPage}&limit=${limit}&searchVal=${searchVal}`).then(response => {           
            let meta = response.data.meta;            
            setMeta(meta)
            setSalaryStructures(response.data.list);
            setIsLoading(false);
            setPageNo(meta.totalPages);

        });
    }, [currentPage, limit, searchVal])

    tableProps.meta = {...meta, setCurrentPage};

    // if (isLoading) return (<h1>Hello</h1>)

    return (
        <DefaultCard className='mb-50' {...cardProps}>
            {isLoading && <ProgressBar />}
            <BasicTable 
                {...tableProps}
                onSizeChange={(pageSize) => onSizeChange(pageSize)}
                onChangeSearchValue = {(searchVal) => onSearchByValue(searchVal)}
            >
                {salaryStructures !== undefined &&
                    JSON.parse(JSON.stringify(salaryStructures)).map((row, rowIndex) => (
                        <tr key={rowIndex + 1}>
                            
                            <td>
                                <span className='fw-normal'>{row.name}</span>
                            </td>
                            <td>
                                <span className='fw-normal'>{row.isActive ? 'ACTIVE' : 'INACTIVE'}</span>
                            </td>
                            <td>
                                <CrudAction
                                    onShowClick={() =>
                                        navigate(`/salary-structure/${row.id}`)
                                    }
                                    onEditClick={() =>
                                        navigate(`/salary-structure/edit/${row.id}`)
                                    }
                                // onDeleteClick={() => onDeleteClick(row)}
                                />
                            </td>
                        </tr>
                    ))}
            </BasicTable>
        </DefaultCard>
    )

}
export default SalaryStructureList;
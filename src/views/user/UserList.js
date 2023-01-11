import React, { useEffect, useState, useCallback }  from "react";
import { Link, useNavigate  } from "react-router-dom";
import { Button } from "react-bootstrap";
import DefaultCard from '../../components/card/default/DefaultCard';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import BasicTable from '../../components/table/BasicTable';
import { ProgressBar } from "react-bootstrap";

import CrudAction from '../../components/buttons/CrudAction';

const UserList = () => {
    let navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1)
    const [usersPerPage, setUsersPerPage] = useState(20)
    const [pageNo, setPageNo] = useState(0)
    const [isLoading, setIsLoading] = useState(true)  

    const [size, setSize] = useState(10);
    const [page, setPage] = useState(1);
    
    const cardProps = {
        title: "Student Type List",
        headerSlot: () => (
            <>
                <Link to='/portal/student-type/add'>
                    <Button variant='link' className='f-right btn-sm btn-color'>
                        <FontAwesomeIcon icon={faPlus} className='me-2' /> Add New Student Type
                    </Button>
                </Link>
            </>
        ),
    };

    const tableProps = {
        headers: [
            { id: "id", label: "#" },
            { id: "name", label: "Name" },
            { id: "trip", label: "Trips" },
            { id: "action", label: "Action", width: "120px" },
        ],
        perPage: [10, 20, 30, 40, 50],
        // config: {
        //     operationId: UrlBuilder.iwpApi(`student-type/list?page=${page}&size=${size}`),
        //     output: "studentTypeList",
        //     storeName: "studentTypeList"
        // },
        meta: {},
    };

    const fetchData = useCallback(async () => {
        const data = await fetch(`https://api.instantwebtools.net/v1/passenger?page=${currentPage}&size=${usersPerPage}`);
        const responseData = await data.json();
        console.log("response", responseData);
        setUsers(responseData.data);
        setPageNo(responseData.totalPages)
        setIsLoading(false)
    }, [currentPage, isLoading])

    useEffect(() => {
        fetchData()
            // make sure to catch any error
            .catch(console.error);
    }, [fetchData])

    tableProps.meta = {
        currentPage: currentPage,
        size: usersPerPage,
        total: pageNo
    };

    const onDeleteClick = (data) => {
        
    };

    const onPageChange = (pageNo) => {
        setPage(pageNo);
        // dispatch(
        //     callApi({
        //         operationId: UrlBuilder.iwpApi(`student-type/list?page=${page}&size=${size}`),
        //         output: "studentTypeList",
        //         storeName: "studentTypeList"
        //     })
        // );
    };

    const onSizeChange = (pageSize) => {
        setSize(pageSize);
        // dispatch(
        //     callApi({
        //         operationId: UrlBuilder.iwpApi(`student-type/list?page=${page}&size=${size}`),
        //         output: "studentTypeList",
        //         storeName: "studentTypeList"
        //     })
        // );
    };

    const onSearchChange = (query) => {
        // dispatch(
        //     callApi({
        //         operationId: UrlBuilder.iwpApi(`student-type/search?page=${page}&size=${size}&search=${query}`),
        //         output: "studentTypeList",
        //         storeName: "studentTypeList"
        //     })
        // );
    };



    const onSearchByValue = (searchVal) => {
        // dispatch(
        //     callApi({
        //         operationId: UrlBuilder.iwpApi(`student-type/search?page=${page}&size=${size}&search=${searchVal}`),
        //         output: "studentTypeList",
        //         storeName: "studentTypeList"
        //     })
        // );
    };


    return (
        <DefaultCard className='mb-50' {...cardProps}>
        {isLoading && <ProgressBar />}
        <BasicTable
            {...tableProps}
        onSizeChange={(pageSize) => onSizeChange(pageSize)}
        onSearchChange={(query) => onSearchChange(query)}
        onSearch={(searchVal) => onSearchByValue(searchVal)}
        onPageChange={(pageNo) => onPageChange(pageNo)}
        >
            {users !== undefined &&
                JSON.parse(JSON.stringify(users)).map((row, rowIndex) => ( 
                    <tr key={rowIndex}>
                        <td>
                            <span className='fw-normal'>{row.id}</span>
                        </td>
                        <td>
                            <span className='fw-normal'>{row.name}</span>
                        </td>
                        <td>
                            <span className='fw-normal'>{row.trips}</span>
                        </td>
                        <td>
                        <CrudAction
                            onShowClick={() =>
                                navigate(`/portal/student-type/${row.id}`)
                            }
                            onEditClick={() =>
                                navigate(`/portal/student-type/${row.id}/edit`)
                            }
                            onDeleteClick={() => onDeleteClick(row)}
                        />
                    </td>
                    </tr>
                ))}
        </BasicTable>
    </DefaultCard>
    )

}
export default UserList;
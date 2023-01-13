// import React, {useState} from 'react'
// import DefaultCard from '../../components/card/default/DefaultCard'
// import { Card, Button } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faList } from "@fortawesome/free-solid-svg-icons";
// import { Link } from 'react-router-dom';
// import {  Modal} from "react-bootstrap";
// import ModalForm from '../../components/popup/ModalForm';
// import SalaryTypeAdd from '../salary_type/SalaryTypeAdd'
// import { ToastContainer, toast } from 'react-toastify';

// const SalaryTypeList = () => {

//     const [show, setShow] = useState(false);
//     const handleShow = () =>{ console.log("clicked")
//         setShow(true);
//     };
//     const handleClose = () => setShow(false);

//     const cardProps = {
//         title: "Manage Salary Type",
//         headerSlot: () => (
//             <>

//                 <button type="button" data-toggle="modal"  onClick={handleShow} className="btn btn-outline-success float-right ">Add Salary Type</button>

//             </>
//         ),
//     };
//     return (
//         <>
//             <DefaultCard className='mb-50'  {...cardProps}>
//             </DefaultCard>
//             <ToastContainer />
//             {
//                 show && (
//                     <ModalForm show={show} handleClose={handleClose} form={<SalaryTypeAdd handleClose={handleClose} />}  ></ModalForm>
//                 )
//             }

//         </>
//     )
// }

// export default SalaryTypeList

import React, { useEffect, useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosService from "../../helpers/axiosService";
import DefaultCard from "../../components/card/default/DefaultCard";
import BasicTable from "../../components/table/BasicTable";
import { ProgressBar } from "react-bootstrap";
import CrudAction from "../../components/buttons/CrudAction";
import { ToastContainer, toast } from "react-toastify";
import ModalForm from "../../components/popup/ModalForm";
import SalaryTypeAdd from "../salary_type/SalaryTypeAdd";

const SalaryTypeList = () => {
  let navigate = useNavigate();
  const [salaryType, setSalaryType] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [pageNo, setPageNo] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [meta, setMeta] = useState({});
  const [searchVal, setSearchVal] = useState("");

  const [show, setShow] = useState(false);
  const handleShow = () => {
    console.log("clicked");
    setShow(true);
  };
  const handleClose = () => setShow(false);

  const tableProps = {
    headers: [
      { id: "name", label: "Salary Type" },
      { id: "isActive", label: "Is Active" },
      { id: "action", label: "Action", width: "100px" },
    ],
    perPage: [10, 20, 30, 40, 50],
    meta: {
      total: 0,
      currentPage: 0,
      totalPages: 0,
      limit: 10,
    },
  };

  const cardProps = {
    title: "Manage Salary Type",
    headerSlot: () => (
      <>
        <button
          type="button"
          data-toggle="modal"
          onClick={handleShow}
          className="btn btn-outline-success float-right ">
          Add Salary Type
        </button>
      </>
    ),
  };

  const onSizeChange = (pageSize) => {
    setLimit(pageSize);
  };

  const onSearchByValue = (searchVal) => {
    setSearchVal(searchVal);
  };

  useEffect(() => {
    setIsLoading(true);
    axiosService
      .get(
        `http://localhost:8080/salary-type/paging?page=${currentPage}&limit=${limit}&searchVal=${searchVal}`
      )
      .then((response) => {
        let meta = response.data.meta;
        setMeta(meta);
        setSalaryType(response.data.list);
        setIsLoading(false);
        setPageNo(meta.totalPages);
      });
  }, [currentPage, limit, searchVal]);

  tableProps.meta = { ...meta, setCurrentPage };

  return (
    <DefaultCard className="mb-3" {...cardProps}>
      <ToastContainer />
      {show && (
        <ModalForm
          show={show}
          handleClose={handleClose}
          form={<SalaryTypeAdd handleClose={handleClose} />}></ModalForm>
      )}
      {isLoading && <ProgressBar />}
      <BasicTable
        {...tableProps}
        onSizeChange={(pageSize) => onSizeChange(pageSize)}
        onChangeSearchValue={(searchVal) => onSearchByValue(searchVal)}>
        {salaryType !== undefined &&
          JSON.parse(JSON.stringify(salaryType)).map((row, rowIndex) => (
            <tr key={rowIndex + 1}>
              <td>
                <span className="fw-normal">{row.name}</span>
              </td>
              <td>
                <span className="fw-normal">
                  {row.isActive ? "ACTIVE" : "INACTIVE"}
                </span>
              </td>
              <td>
                <CrudAction
                  onShowClick={() => navigate(`/portal/student-type/${row.id}`)}
                  onEditClick={() =>
                    navigate(`/portal/student-type/${row.id}/edit`)
                  }
                  // onDeleteClick={() => onDeleteClick(row)}
                />
              </td>
            </tr>
          ))}
      </BasicTable>
    </DefaultCard>
  );
};
export default SalaryTypeList;

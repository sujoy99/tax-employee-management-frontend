import React, { useEffect, useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosService from "../../helpers/axiosService";
import DefaultCard from "../../components/card/default/DefaultCard";
import BasicTable from "../../components/table/BasicTable";
import { Button, Modal, ProgressBar } from "react-bootstrap";
import CrudAction from "../../components/buttons/CrudAction";
import { ToastContainer, toast } from "react-toastify";
import ModalForm from "../../components/popup/ModalForm";
import SalaryTypeAdd from "../salary_type/SalaryTypeAdd";
import SalaryTypeService from './SalaryTypeService';
import ModalStatus from "../../components/popup/ModalStatus";
import { SuccessToast } from "../../components/toaster/Toaster";

const SalaryTypeList = () => {
  let navigate = useNavigate();
  const [salaryType, setSalaryType] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [pageNo, setPageNo] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [meta, setMeta] = useState({});
  const [searchVal, setSearchVal] = useState("");
  const [isReload, setIsReload] = useState(false);

  const [show, setShow] = useState(false);
  const [showStatus, setShowStatus] = useState(false);
  const [statusType, setstatusType] = useState('')
  const [salaryTypeId, setsalaryTypeId] = useState('');


  const handleShow = () => {
    console.log("clicked");
    setShow(true);
  };
  const handleClose = () => setShow(false);
  const handleModalClose = () => {console.log("ok"); setShowStatus(false)};

  const tableProps = {
    headers: [
      { id: "name", label: "Salary Type" },
      { id: "isActive", label: "Status" },
      { id: "action", label: "Action", width: "140px" },
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

  const onSubmitReload = () => {
    setIsReload(!isReload);
  }

  const onSizeChange = (pageSize) => {
    setLimit(pageSize);
  };

  const onSearchByValue = (searchVal) => {
    setSearchVal(searchVal);
  };

  const statusModal = (statustype,salaryTypeId) =>{console.log(statustype)
    // alert("ok")
    setShowStatus(true)
    setstatusType(statustype)
    setsalaryTypeId(salaryTypeId)
    // setShowStatusModal(true);
  }

  const changeStatus = async () => {
    console.log("change status",salaryTypeId,'akjsdahdof',statusType);

    try {
      console.log("ok")
      const response = await SalaryTypeService.updateSalaryTypeStatus({'statusType' : statusType}, salaryTypeId)
      console.log("response", response);
      if (response.status === 200) {
        setShowStatus(false);
        setIsReload(!isReload);
        SuccessToast(response.message, () => navigate("/salary-type"));
      }

  } catch (error) {
      console.log(" Error Occured ", error);
  }
  }
  

  useEffect(() => {
    setIsLoading(true);
    // axiosService
    //   .get(
    //     `http://localhost:8080/salary-type/paging?page=${currentPage}&limit=${limit}&searchVal=${searchVal}`
    //   )
    //   .then((response) => {
    //     let meta = response.data.meta;
    //     setMeta(meta);
    //     setSalaryType(response.data.list);
    //     setIsLoading(false);
    //     setPageNo(meta.totalPages);
    //   });

      SalaryTypeService.getSalaryTypeWithPaging(`page=${currentPage}&limit=${limit}&searchVal=${searchVal}`).then(response => {           
        let meta = response.data.meta;            
        setMeta(meta)
        setSalaryType(response.data.list);
        setIsLoading(false);
        setPageNo(meta.totalPages);

    });
  }, [currentPage, limit, searchVal, isReload]);

  tableProps.meta = { ...meta, setCurrentPage };

  return (
    <DefaultCard className="mb-4" {...cardProps}>
      <ToastContainer />
      {show && (
        
        <ModalForm
          show={show}
          handleClose={handleClose}
          >
            <SalaryTypeAdd handleClose={handleClose} onSubmitReload={onSubmitReload} />
          </ModalForm>
      )}

      {showStatus && (
        
        <ModalStatus
          show={showStatus}
          handleModalClose={handleModalClose}
          statusType= {statusType}
          changeStatus = {changeStatus}
          salaryTypeId = {salaryTypeId}
          >
            {/* <SalaryTypeAdd handleClose={handleClose} onSubmitReload={onSubmitReload} /> */}

          </ModalStatus>
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
                  onEditClick={() => navigate(`/portal/student-type/${row.id}/edit`)}
                  onStatusChangeClick={() =>statusModal(row.isActive,row.id)}
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

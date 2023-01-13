import React, { useEffect, useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosService from "../../helpers/axiosService";
import { Button } from "react-bootstrap";
import DefaultCard from "../../components/card/default/DefaultCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import BasicTable from "../../components/table/BasicTable";
import { ProgressBar } from "react-bootstrap";
import CrudAction from "../../components/buttons/CrudAction";
import { ToastContainer, toast } from "react-toastify";

const EmployeeList = () => {
  let navigate = useNavigate();
  const [employees, setEmployees] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [pageNo, setPageNo] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [meta, setMeta] = useState({});
  const [searchVal, setSearchVal] = useState("");

  const tableProps = {
    headers: [
      { id: "firstName", label: "FirstName" },
      { id: "lastName", label: "LastName" },
      { id: "joiningDate", label: "JoiningDate" },
      { id: "action", label: "Action", width: "120px" },
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
    title: "Employee List",
    headerSlot: () => (
      <>
        <Link to="/employee/add">
          <Button variant="link" className="f-right btn-sm btn-color">
            <FontAwesomeIcon icon={faPlus} className="me-2" /> Add New Employee
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
    console.log(" search value : ", searchVal);
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

  useEffect(() => {
    setIsLoading(true);
    axiosService
      .get(
        `http://localhost:8080/employee/paging?page=${currentPage}&limit=${limit}&searchVal=${searchVal}`
      )
      .then((response) => {
        let meta = response.data.meta;
        setMeta(meta);
        setEmployees(response.data.list);
        setIsLoading(false);
        setPageNo(meta.totalPages);
        // debugger
      });
  }, [currentPage, limit, searchVal]);

  tableProps.meta = { ...meta, setCurrentPage };

  // if (isLoading) return (<h1>Hello</h1>)

  return (
    <DefaultCard className="mb-50" {...cardProps}>
      {isLoading && <ProgressBar />}
      <BasicTable
        {...tableProps}
        onSizeChange={(pageSize) => onSizeChange(pageSize)}
        onChangeSearchValue={(searchVal) => onSearchByValue(searchVal)}>
        {employees !== undefined &&
          JSON.parse(JSON.stringify(employees)).map((row, rowIndex) => (
            <tr key={rowIndex + 1}>
              <td>
                <span className="fw-normal">{row.firstName}</span>
              </td>
              <td>
                <span className="fw-normal">{row.lastName}</span>
              </td>
              <td>
                <span className="fw-normal">{row.joiningDate}</span>
              </td>
              <td>
                <CrudAction
                  onShowClick={() => navigate(`/employee/view/${row.id}/true`)}
                  onEditClick={() => navigate(`/employee/edit/${row.id}/false`)}
                  onSalaryTaxClick={() =>
                    navigate(`/employee-salary/${row.id}/add`)
                  }
                  // onDeleteClick={() => onDeleteClick(row)}
                />
              </td>
            </tr>
          ))}
      </BasicTable>
      <ToastContainer />
    </DefaultCard>
  );
};
export default EmployeeList;

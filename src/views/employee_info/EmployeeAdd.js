import { faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Formik } from "formik";
import React, { useCallback, useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";

import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import DefaultCard from "../../components/card/default/DefaultCard";
import { SuccessToast } from "../../components/toaster/Toaster";
import SalaryStructureService from "../salary_structure/SalaryStructureService";
import { Employee } from "./Employee";
import EmployeeForm from "./EmployeeForm";
import EmployeeService from "./EmployeeService";

const EmployeeAdd = () => {
  const [salaryStructureList, setSalaryStructureLists] = useState([]);

  const navigate = useNavigate();

  const fetchSalaryStructureData = useCallback(async () => {
    const response = await SalaryStructureService.getSalaryStructure();
    setSalaryStructureLists(response.data);
  }, []);

  useEffect(() => {
    fetchSalaryStructureData();
  }, []);

  const cardProps = {
    title: "View Employee ",
    headerSlot: () => (
      <Link to="/employee">
        <Button variant="link" className="f-right btn-sm p-1">
          <FontAwesomeIcon icon={faList} className="me-2" />
          View Employee List
        </Button>
      </Link>
    ),
  };

  const onSubmit = async (values) => {
    try {
      await EmployeeService.createEmployee(values).then((response) => {
        const status = response.status;
        if (status == 200) {
          SuccessToast(response.message, () => navigate("/employee"));
        }
      });
    } catch (error) {
      console.log(" Error Occured ", error);
    }
  };

  return (
    <DefaultCard className="mb-50" {...cardProps}>
      <Card border="white" className="table-wrapper table-responsive">
        <Card.Body className="shadow p-3 mb-5 bg-white rounded container">
          <div className="row">
            <div className="col-3"></div>
            <div className="col-6">
              <Formik
                initialValues={Employee}
                validationSchema={Employee.validator()}
                onSubmit={onSubmit}>
                {(props) => {
                  return (
                    <EmployeeForm
                      dropDownOptions={salaryStructureList}
                      formType="add"
                      {...props}
                    />
                  );
                }}
              </Formik>
            </div>

            <div className="col-3"></div>
          </div>
          <ToastContainer />
        </Card.Body>
      </Card>
    </DefaultCard>
  );
};

export default EmployeeAdd;

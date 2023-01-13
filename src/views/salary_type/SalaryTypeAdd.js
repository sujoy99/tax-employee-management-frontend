import React from "react";
import { Formik } from "formik";

import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import SalaryTypeForm from "./SalaryTypeForm";
import { SalaryType } from "./SalaryType";
import { Link } from "react-router-dom";
import axiosService from "../../helpers/axiosService";
import { SuccessToast, ErrorToast } from "../../components/toaster/Toaster";
import { ToastContainer  } from "react-toastify";


const SalaryTypeAdd = (props) => {
  const { handleClose, ...rest } = props;
  const cardProps = {
    title: "Manage Salary Type",
    headerSlot: () => (
      <>
        <Link to="#">
          <Button variant="link" className="f-right btn-sm p-1">
            <FontAwesomeIcon icon={faList} className="me-2" />
            View Student Type List
          </Button>
        </Link>
      </>
    ),
  };

  const testing = () => {
    handleClose();
  };

  const reload=()=>window.location.reload();

  const onSubmit = async (values) => {

    try {
      const response = await axiosService.post(
        "http://10.0.2.230:8080/salary-type/save",
        values
      ).then(response => {
        testing();
        SuccessToast(response.message, reload());
      }).catch(err => {
        
        ErrorToast(err.response.data.message)
      });
      
      
      
    } catch (err) {
      ErrorToast(err.response.data.message)
    }
  };

  return (
    
    <div className="row">
      <Formik
        initialValues={SalaryType}
        validationSchema={SalaryType.validator()}
        onSubmit={onSubmit}
      >
        {(props) => {
          return <SalaryTypeForm formType="add" {...props} />;
        }}
      </Formik>
      <ToastContainer />
    </div>

  );
};

export default SalaryTypeAdd;

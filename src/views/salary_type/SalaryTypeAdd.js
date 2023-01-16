import { faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Formik } from "formik";
import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ErrorToast, SuccessToast } from "../../components/toaster/Toaster";
import axiosService from "../../helpers/axiosService";
import { SalaryType } from "./SalaryType";
import SalaryTypeForm from "./SalaryTypeForm";
import SalaryTypeService from './SalaryTypeService';


const SalaryTypeAdd = (props) => {
  const { handleClose, onSubmitReload, ...rest } = props;
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

    // const response = await SalaryStructureService.createSalaryStructure(values)
    // console.log("response", response);
    // if (response.status === 200) {
    //     onSubmitProps.setSubmitting(false)
    //     SuccessToast(response.message, () => navigate("/salary-structure"));
    // }

    try {
      // const response = await axiosService.post(
      //   "http://192.168.0.105:8080/salary-type/save",
      //   values
      // ).then(response => {
      //   testing();
      //   onSubmitReload();
      //   SuccessToast(response.message, reload());
      // }).catch(err => {
        
      //   ErrorToast(err.response.data.message)
      // });
      const response = await SalaryTypeService.createSalaryType(
        values
      ).then(response => {
        testing();
        
        SuccessToast(response.message, ()=> { console.log("reload")});
        onSubmitReload();
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

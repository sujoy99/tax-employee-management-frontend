import { faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import DefaultCard from "../../components/card/default/DefaultCard";
import { getSalaryObject } from "../../helpers/utils";
import SalaryTypeService from "../salary_type/SalaryTypeService";
import { EmployeeSalary } from "./EmployeeSalary";
import EmployeeSalaryForm from "./EmployeeSalaryForm";
import { useParams } from "react-router-dom";
import EmployeeService from "../employee_info/EmployeeService";

const EmployeeSalaryAdd = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  const [salaryTypeList, setSalaryTypeLists] = useState([]);
  const [salaryTypeObject, setSalaryTypeObject] = useState({});

  const fetchSalaryTypeData = async () => {
    // const response = await SalaryTypeService.getSalaryTypes();
    // // console.log("response  :: ", response);
    // setSalaryTypeLists(response.data);

    const response = await EmployeeService.getSalaryTypeForEmployee(id);
  };

  useEffect(() => {
    fetchSalaryTypeData();
  }, []);

  const cardProps = {
    title: "Add New Student Type",
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

  const onSubmit = (values) => {
    // console.log(getSalaryObject(2022, 2023));
    console.log("Form data", values);
  };

  const onChangeTaxYear = (e, values, setValues, setFieldValue) => {
    console.log("hello");

    if (e.target.value) {
      const [fromYear, toYear] = e.target.value.split("-");

      const lineItems = getSalaryObject(fromYear, toYear);

      setFieldValue("taxYear", e.target.value);
      setValues({ ...values, lineItems });
      setIsLoading(false);

      // call formik onChange method
      // field.onChange(e);
    } else {
      setValues({ ...values, lineItems: [] });
    }
  };

  return (
    <DefaultCard className="mb-50" {...cardProps}>
      <Card border="white" className="table-wrapper table-responsive">
        <Card.Body className="shadow p-3 mb-5 bg-white rounded container">
          <div className="row">
            <div className="col-1"></div>
            {/* {loading && <ProgressBar />} */}
            <div className="col-10">
              <Formik
                initialValues={EmployeeSalary}
                // validationSchema={SalaryType.validator()}
                onSubmit={onSubmit}
                enableReinitialize={true}>
                {(props) => {
                  return (
                    <EmployeeSalaryForm
                      formType="add"
                      salaryTypeList={salaryTypeList}
                      onChangeTaxYear={onChangeTaxYear}
                      {...props}
                    />
                  );
                }}
              </Formik>
            </div>

            <div className="col-1"></div>
          </div>
        </Card.Body>
      </Card>
    </DefaultCard>
  );
};

export default EmployeeSalaryAdd;

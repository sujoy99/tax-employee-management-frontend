  import React from "react";
  import { Formik, Form, FieldArray, ErrorMessage, Field } from "formik";
  import { Navbar, Row, Col, Button } from "react-bootstrap";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { faSave, faTimes, faUndo } from "@fortawesome/free-solid-svg-icons";
  import { Link } from "react-router-dom";

  import FormikControl from "../../components/form/FormikControl";

  const SalaryTypeForm = () => {
    return (
      <Form className="form-horizontal">
        <Row>
          <Col xs={12} >
            <FormikControl
              control="input"
              type="text"
              //label='Salary Type Name'
              name={`name`}
              className="form-control"
              placeHolder="Enter Salary Type"
            />
          </Col>
          <Col xs={12} >
            <Button
              className="f-right btn-color btn-sm btn-success float-right"
              type="submit" 
            >
              <FontAwesomeIcon icon={faSave} type="submit" className="me-2"  />{" "}
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    );
  };

  export default SalaryTypeForm;

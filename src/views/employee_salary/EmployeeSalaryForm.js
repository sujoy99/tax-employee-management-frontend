import { faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form } from "formik";
import React, { useEffect, useState } from "react";
import { Button, Row } from "react-bootstrap";
import FormikControl from "../../components/form/FormikControl";
import BasicTable from "../../components/table/BasicTable";
import { getSalaryObject, getSalaryObjectTotal } from "../../helpers/utils";

const EmployeeSalaryForm = (props) => {
  const {
    onChangeTaxYear,
    values,
    setValues,
    setFieldValue,
    salaryTypeList,
    touched,
    handleBlur,
    handleChange,
    ...rest
  } = props;
  const [tableProps, setTableProps] = useState({});

  console.log("values:", values);

  const dropdownOptions = [
    { name: "Select an option", value: "" },
    { name: "2021-2022", value: "2021-2022" },
    { name: "2022-2023", value: "2022-2023" },
    { name: "2023-2024", value: "2023-2024" },
  ];

  useEffect(() => {
    //Runs only on the first render
    if (values.taxYear) {
      const [fromYear, toYear] = values.taxYear.split("-");

      const salaryPerMonth = getSalaryObject(
        fromYear,
        toYear,
        values,
        salaryTypeList
      );
      const salaryPerYear = getSalaryObjectTotal(values, salaryTypeList);
      console.log("salaryPerMonth", salaryPerMonth);

      let headers = salaryTypeList.map((item, idx) => {
        return { id: item.name, label: item.name };
      });
      tableProps.headers = [
        { id: "id", label: "#" },
        { id: "id", label: "Total Amount" },
        ...headers,
      ];
      setValues({ ...values, salaryPerMonth, salaryPerYear });
    } else {
      setValues({ ...values, salaryPerMonth: [], salaryPerYear: [] });
    }
  }, [values.taxYear]);
  return (
    <Form className="form-horizontal">
      <FormikControl
        control="select"
        label="Select Tax Year"
        name="taxYear"
        className="form-control"
        options={dropdownOptions}
      />
      {values.salaryPerMonth.length > 0 && (
        <>
          <BasicTable {...tableProps}>
            <>
              {values.salaryPerMonth.length > 0 &&
                values.salaryPerMonth.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    <td>
                      <span className="fw-normal">{row.rowHeader}</span>
                    </td>
                    {row.list.map((col, colIndex) => {
                      // TODO: SHOULD BY DYNAMIC
                      let index = rowIndex * salaryTypeList.length + colIndex;

                      return (
                        <td key={colIndex}>
                          <FormikControl
                            control="input"
                            type="text"
                            name={`lineItems[${index}].amount`}
                            className="form-control"
                            placeHolder="Enter Salary"
                          />
                        </td>
                      );
                    })}
                  </tr>
                ))}

              <tr key={1000000}>
                <td>
                  <span className="fw-normal">{"Total"}</span>
                </td>
                {salaryTypeList.length > 0 &&
                  salaryTypeList.map((item, index) => {
                    return (
                      <td key={index}>
                        <FormikControl
                          control="input"
                          type="text"
                          name={`lineItemTotals[${index}].amount`}
                          className="form-control"
                          placeHolder="Enter Salary"
                          value={
                            (values.lineItemTotals[index].amount =
                              values.lineItems
                                .filter((x) => x.salaryTypeId === item.value)
                                .reduce((acc, curr) => {
                                  return acc + Number(curr.amount);
                                }, 0) || "0")
                          }
                        />
                      </td>
                    );
                  })}
              </tr>
            </>
          </BasicTable>

          <Row className="d-flex justify-content-center ml-5">
            <Button
              variant=""
              className="f-right btn-color btn-sm btn-success"
              type="submit">
              <FontAwesomeIcon icon={faSave} className="me-2" /> Submit
            </Button>
          </Row>

          {/* <button type='submit'>submit</button> */}
        </>
      )}
    </Form>
  );
};

export default EmployeeSalaryForm;

import React, { useEffect, useMemo } from 'react'
import { Formik, Form, FieldArray, ErrorMessage, Field, useFormikContext } from 'formik'
import { Navbar, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faTimes, faUndo } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

import FormikControl from '../../components/form/FormikControl'
import BasicTable from '../../components/table/BasicTable';
import EmployeeSalaryTable from './EmployeeSalaryTable';
import { getSalaryObject } from '../../helpers/utils';

const EmployeeSalaryForm = (props) => {
    console.log("p:", props)
    const { onChangeTaxYear, values, setValues, setFieldValue, ...rest } = props

    let count = 0;

    const dropdownOptions = [
        { key: 'Select an option', value: '' },
        { key: '2021-2022', value: '2021-2022' },
        { key: '2022-2023', value: '2022-2023' },
        { key: '2023-2024', value: '2023-2024' }
    ]

    const salaryTypeList = [
        {
            id: 1,
            name: 'Basic'
        },
        {
            id: 2,
            name: 'House Rent'
        },
        {
            id: 3,
            name: 'Medical'
        }
    ];

    useEffect(() => {
        //Runs only on the first render
        if (values.taxYear) {
            const [fromYear, toYear] = values.taxYear.split('-');

            const salaryPerMonth = getSalaryObject(fromYear, toYear, values);

            setValues({ ...values, salaryPerMonth });
            // setIsLoading(false);


            // call formik onChange method
            // field.onChange(e);
        } else {
            setValues({ ...values, salaryPerMonth: [] });
        }
    }, [values.taxYear]);

    const tableProps = {
        headers: [
            { id: "id", label: "#" },
            { id: "basic", label: "Basic" },
            { id: "houseRent", label: "House Rent" },
            { id: "medical", label: "Medical" },
            // {id: "action", label: "Action", width: "120px"},
        ],
        perPage: [10, 20, 30, 40, 50],
        // config: {
        //     operationId: UrlBuilder.api(`student-type/list?page=${page}&size=${size}`),
        //     output: "studentTypeList",
        //     storeName: "studentTypeList"
        // },
        meta: {},
    };



    return (
        <Form className="form-horizontal">
            <FormikControl
                control='select'
                label='Select Tax Year'
                name='taxYear'
                className='form-control'
                options={dropdownOptions}
            />

            {
                values.salaryPerMonth.length > 0 && (
                    <BasicTable
                        {...tableProps}
                    >
                        {values.salaryPerMonth.length > 0 &&
                            JSON.parse(JSON.stringify(values.salaryPerMonth)).map((row, rowIndex) => (

                                <tr key={rowIndex} >
                                    <td>
                                        <span className='fw-normal'>{row.year + "-" + row.month}</span>
                                    </td>
                                    {
                                        JSON.parse(JSON.stringify(row.list)).map((col, colIndex) => {

                                            // TODO: SHOULD BY DYNAMIC
                                            let index = rowIndex * 3 + colIndex;

                                            return (
                                                <td key={colIndex}>
                                                    <FormikControl
                                                        control='input'
                                                        type='text'
                                                        name={` values.lineItems[${index}].amount`}
                                                        className='form-control'
                                                        placeHolder='Enter Salary Type'
                                                        value={col.amount}
                                                        isStyle='false'
                                                    />

                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                            ))}
                    </BasicTable>
                )
            }

            {/* <pre>{JSON.stringify(values, undefined, 2)}</pre> */}


            {/* <Col md={12} className='mb-10 mt-10 ml-5'>
                <Button variant='' className='f-right btn-color btn-sm btn-success' type='submit'>
                    <FontAwesomeIcon icon={faSave} className='me-2' /> Submit
                </Button>
                <Button variant='white' className='f-right mr-10 btn-sm btn-secondary mx-2' type='reset'>
                    <FontAwesomeIcon icon={faUndo} className='me-2' /> Reset
                </Button>
                <Link to='/portal/student-type'>
                    <Button variant='white' className='f-right mr-10 btn-sm btn-danger' type='cancle'>
                        <FontAwesomeIcon icon={faTimes} className='me-2' /> Cancel
                    </Button>
                </Link>
            </Col> */}
        </Form >
    )
}

export default EmployeeSalaryForm;
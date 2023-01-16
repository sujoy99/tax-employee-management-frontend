import React, {useEffect, useMemo, useState} from 'react';
import {Form} from 'formik';

import FormikControl from '../../components/form/FormikControl';
import BasicTable from '../../components/table/BasicTable';
import {getSalaryObject} from '../../helpers/utils';

const EmployeeSalaryForm = (props) => {
    const {onChangeTaxYear, values, setValues, setFieldValue, ...rest} = props;
    const [basicSalary, setBasicSalary] = useState(0);
    const [houseAllowance, setHouseAllowance] = useState(0);
    const [medicalAllowance, setMedicalAllowance] = useState(0);
    let bSalary = 0;
    let hSalary = 0;
    let mSalary = 0;

    useEffect(() => {
        values?.lineItems.map((item) => {
            if (item?.salaryTypeId === 1) {
                bSalary = bSalary + Number(item?.amount);
                setBasicSalary(bSalary);
            }
            if (item?.salaryTypeId === 2) {
                hSalary = hSalary + Number(item?.amount);
                setHouseAllowance(hSalary);
            }
            if (item?.salaryTypeId === 3) {
                mSalary = mSalary + Number(item?.amount);
                setMedicalAllowance(mSalary);
            }
        });
       /*values?.lineItems.push({
            "salaryTypeId": 1,
            "amount": basicSalary,
            "isTotal": true
        })*/
    }, [values?.lineItems]);

    console.log('This is the basic salary', basicSalary);
    console.log('This is the basic houseAllowance', houseAllowance);
    console.log('This is the basic medicalAllowance', medicalAllowance);

    const dropdownOptions = [
        {name: 'Select an option', value: ''},
        {name: '2021-2022', value: '2021-2022'},
        {name: '2022-2023', value: '2022-2023'},
        {name: '2023-2024', value: '2023-2024'},
    ];

    const salaryTypeList = [
        {
            id: 1,
            name: 'Basic',
        },
        {
            id: 2,
            name: 'House Rent',
        },
        {
            id: 3,
            name: 'Medical',
        },
    ];

    useEffect(() => {
        //Runs only on the first render
        if (values.taxYear) {
            const [fromYear, toYear] = values.taxYear.split('-');

            const salaryPerMonth = getSalaryObject(fromYear, toYear, values);

            setValues({...values, salaryPerMonth});
            // setIsLoading(false);
            // call formik onChange method
            // field.onChange(e);
        } else {
            setValues({...values, salaryPerMonth: []});
        }
    }, [values.taxYear]);

    const tableProps = {
        headers: [
            {id: 'id', label: '#'},
            {id: 'basic', label: 'Basic'},
            {id: 'houseRent', label: 'House Rent'},
            {id: 'medical', label: 'Medical'},
            // {id: "action", label: "Action", width: "120px"},
        ],
    };

    return (
        <Form className='form-horizontal'>
            <FormikControl
                control='select'
                label='Select Tax Year'
                name='taxYear'
                className='form-control'
                options={dropdownOptions}
            />
            {values.salaryPerMonth.length > 0 && (
                <BasicTable {...tableProps}>
                    <>
                        {values.salaryPerMonth.length > 0 &&
                            JSON.parse(JSON.stringify(values.salaryPerMonth)).map(
                                (row, rowIndex) => (
                                    <tr key={rowIndex}>
                                        <td>
                      <span className='fw-normal'>
                        {row.year + '-' + row.month}
                      </span>
                                        </td>
                                        {JSON.parse(JSON.stringify(row.list)).map(
                                            (col, colIndex) => {
                                                // TODO: SHOULD BY DYNAMIC
                                                let index = rowIndex * 3 + colIndex;

                                                return (
                                                    <td key={colIndex}>
                                                        <FormikControl
                                                            control='input'
                                                            type='text'
                                                            name={`lineItems[${index}].amount`}
                                                            className='form-control'
                                                            placeHolder='Enter Salary'
                                                            defaultValue={0}
                                                            isStyle='false'
                                                        />
                                                    </td>
                                                );
                                            },
                                        )}
                                    </tr>
                                ),
                            )}

                        <tr key={1}>
                            <td>
                                <span className='fw-normal'>{'Total'}</span>
                            </td>
                            <td key={1}>
                                <FormikControl
                                    control='input'
                                    type='text'
                                    realonly={true}
                                    name={`lineItems.total.basic`}
                                    value={basicSalary}
                                    defaultValue={0}
                                    isStyle='true'
                                />
                            </td>
                            <td key={1}>
                                <FormikControl
                                    control='input'
                                    type='text'
                                    name={`lineItems.total.house_rent`}
                                    value={houseAllowance}
                                    defaultValue={0}
                                    isStyle='true'
                                />
                            </td>
                            <td key={1}>
                                <FormikControl
                                    control='input'
                                    type='text'
                                    name={`lineItems.total.medical`}
                                    value={medicalAllowance}
                                    defaultValue={0}
                                    isStyle='true'
                                />
                            </td>
                        </tr>
                    </>
                </BasicTable>
            )}
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
        </Form>
    );
};

export default EmployeeSalaryForm;

import React, { useCallback, useState, useMemo, useEffect } from "react";
import { useFormikContext, getIn } from "formik";
import TableReact from '../../components/table/TableReact';
import FormikControl from '../../components/form/FormikControl'

const EMPTY_ARR = [];

const EmployeeSalaryTable = ({ name }) => {

    const { values } = useFormikContext();

    // from all the form values we only need the "friends" part.
    // we use getIn and not values[name] for the case when name is a path like `social.facebook`
    const formikSlice = getIn(values, name) || EMPTY_ARR;
    const [tableRows, setTableRows] = useState(formikSlice);
    console.log("ok", formikSlice);

    // const data = [{  
    //     name: 'Ayaan',  
    //     age: 26  
    //     },{  
    //     name: 'Ahana',  
    //     age: 22  
    //     },{  
    //     name: 'Peter',  
    //     age: 40   
    //     },{  
    //     name: 'Virat',  
    //     age: 30  
    //     },{  
    //     name: 'Rohit',  
    //     age: 32  
    //     },{  
    //     name: 'Dhoni',  
    //     age: 37  
    //     }] 

    const columns = useMemo(
        () => [
            {
                Header: "Id",
                accessor: "id"
            },
            {
                Header: "First Name",
                id: "firstName",
                Cell: ({ row: { index } }) => {
                    //   <Input name={`${name}[${index}].firstName`} />
                  return  (<FormikControl
                        control='input'
                        label='Select a topic'
                        name='selectOption'
                        className='form-control'
                    />)
                    
                }
            },
            // {
            //     Header: "Last Name",
            //     id: "lastName",
            //     Cell: ({ row: { index } }) => (
            //         <FormikControl
            //         control='input'
            //         label='Select a topic'
            //         name='selectOption'
            //         className='form-control'
            //     />
            // )
            // }
        ],
        [name]
    );
    console.log("c:", columns)

    // const columns = [{  
    //     Header: 'Name',  
    //     accessor: 'name'  
    //    },{  
    //    Header: 'Age',  
    //    accessor: 'age'  
    //    }] 

    return (
        <>
            <TableReact data={tableRows} columns={columns} rowKey="id" />
        </>
    )
}

export default EmployeeSalaryTable

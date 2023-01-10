import React,{useEffect} from 'react'
import axiosService from '../../helpers/axiosService'

const SalaryTypeList = () => {
    useEffect(()=> {
        axiosService.get('http://localhost:8080/salary-type/list','').then(response => console.log("s", response));
    },[])
    return (
        <div>
            <h1>This is Salaty Type list</h1>
        </div>
    )
}

export default SalaryTypeList



import axiosService from '../../helpers/axiosService';
import {UrlBuilder} from '../../helpers/UrlBuilder';

const SALARY_TYPE_API_BASE_URL = "salary-type";

class SalaryTypeService {

    getSalaryTypes(){
        return axiosService.get(UrlBuilder.taxEmployeeManagementApi(`${SALARY_TYPE_API_BASE_URL}/list`));
    }

    getSalaryTypeWithPaging(path){
        return axiosService.get(UrlBuilder.taxEmployeeManagementApi(`${SALARY_TYPE_API_BASE_URL}/paging?${path}`));
    }


    createSalaryType(salaryType){
        return axiosService.post(UrlBuilder.taxEmployeeManagementApi(`${SALARY_TYPE_API_BASE_URL}/save`), salaryType);
    }

    getSalaryTypeById(salaryTypeId){
        return axiosService.get(UrlBuilder.taxEmployeeManagementApi(`${SALARY_TYPE_API_BASE_URL}/find/${salaryTypeId}`));
    }

    // updateEmployee(employee, employeeId){
    //     return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId, employee);
    // }

    // deleteEmployee(employeeId){
    //     return axios.delete(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    // }
}

export default new SalaryTypeService()
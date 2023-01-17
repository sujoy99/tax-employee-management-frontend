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

    updateSalaryTypeStatus(salaryTypeStatus, salaryTypeId){
        return axiosService.put(UrlBuilder.taxEmployeeManagementApi(`${SALARY_TYPE_API_BASE_URL}/update/status/${salaryTypeId}`), salaryTypeStatus);
    }

    // deleteEmployee(employeeId){
    //     return axios.delete(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    // }
}

export default new SalaryTypeService()
import axiosService from '../../helpers/axiosService';
import {UrlBuilder} from '../../helpers/UrlBuilder';

const SALARY_STRUCTURE_API_BASE_URL = "salary-structure";

class SalaryStructureService {

    getSalaryStructure(){
        return axiosService.get(UrlBuilder.taxEmployeeManagementApi(`${SALARY_STRUCTURE_API_BASE_URL}/list`));
    }

    getSalaryStructureWithPaging(path){
        return axiosService.get(UrlBuilder.taxEmployeeManagementApi(`${SALARY_STRUCTURE_API_BASE_URL}/paging?${path}`));
    }


    createSalaryStructure(salaryStructure){
        return axiosService.post(UrlBuilder.taxEmployeeManagementApi(`${SALARY_STRUCTURE_API_BASE_URL}/save`), salaryStructure);
    }

    getSalaryStructureById(salaryStructureId){
        return axiosService.get(UrlBuilder.taxEmployeeManagementApi(`${SALARY_STRUCTURE_API_BASE_URL}/find/${salaryStructureId}`));
    }

    updateSalaryStructure(salaryStructure, salaryStructureId){ console.log("ss", salaryStructure);
        return axiosService.put(UrlBuilder.taxEmployeeManagementApi(`${SALARY_STRUCTURE_API_BASE_URL}/update/${salaryStructureId}`), salaryStructure);
    }

    // deleteEmployee(employeeId){
    //     return axios.delete(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    // }
}

export default new SalaryStructureService()
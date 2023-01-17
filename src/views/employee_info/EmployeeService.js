import axiosService from "../../helpers/axiosService";
import { UrlBuilder } from "../../helpers/UrlBuilder";

const EMPLOYEE_API_BASE_URL = "employee";

class EmployeeService {
  getEmployeeList() {
    return axiosService.get(
      UrlBuilder.taxEmployeeManagementApi(`${EMPLOYEE_API_BASE_URL}/list`)
    );
  }

  getEmployeeWithPaging(path) {
    return axiosService.get(
      UrlBuilder.taxEmployeeManagementApi(
        `${EMPLOYEE_API_BASE_URL}/paging?${path}`
      )
    );
  }

  createEmployee(employee) {
    return axiosService.post(
      UrlBuilder.taxEmployeeManagementApi(`${EMPLOYEE_API_BASE_URL}/save`),
      employee
    );
  }

  getEmployeeById(EmployeeId) {
    return axiosService.get(
      UrlBuilder.taxEmployeeManagementApi(
        `${EMPLOYEE_API_BASE_URL}/find?id=${EmployeeId}`
      )
    );
  }

  updateEmployee(employee) {
    return axiosService.post(
      UrlBuilder.taxEmployeeManagementApi(`${EMPLOYEE_API_BASE_URL}/update/`),
      employee
    );
  }

  // updateEmployee(employee, employeeId){
  //     return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId, employee);
  // }

  // deleteEmployee(employeeId){
  //     return axios.delete(EMPLOYEE_API_BASE_URL + '/' + employeeId);
  // }
}

export default new EmployeeService();

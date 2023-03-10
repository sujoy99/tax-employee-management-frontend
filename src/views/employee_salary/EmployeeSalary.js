import * as Yup from 'yup';

class EmployeeSalaryModel {

    /**
     * Model properties
     */
    constructor() {
        this.employeeId = "";
        this.taxYear = "";
        // this.taxAssesmentId = "";
        // this.lineItems = [{ year: "", month: "", salaryTypeId: "", amount: "", isTotal: "" }]
        this.lineItems = []
        this.salaryPerMonth = [];
        this.lineItemTotals = [];
    }

    /**
     * Get model instance from json
     */
    fromJson(data = '') {
        let obj = new EmployeeSalaryModel();
        // if (data.id !== undefined && data.id) {
        //     obj.id = data.id;
        // }
        // obj.salaryTypeName = data.salaryTypeName ?? "";
        // obj.studentTypeDescription = data.studentTypeDescription ?? "";
        // obj.salaryTypes = data.salaryTypes ?? [{name: ""}] 
        return obj;
    }

    /**
     * Get string from model instance
     */
    toFormData(obj = {}) {
        let data = new FormData();
        data.append("request", new EmployeeSalaryModel().toString(obj));
        return data;
    }

    /**
     * Get string from model instance
     */
    toString(data = {}) {
        let obj = new EmployeeSalaryModel()
            .fromJson(data);
        return JSON.stringify(obj);
    }

    /**
     * Validator schema
     */
    validator() {
        return Yup.object().shape({
            // salaryTypeName: Yup.string().required("Salary type name is a required field!"),
            // studentTypeDescription: Yup.string().required("Student type description is a required field!"),
            // salaryTypes: Yup.array().of(Yup.object().shape({
            //     name: Yup.string().required('*Required')
            // }))
        });
    }

}

export const EmployeeSalary = new EmployeeSalaryModel();

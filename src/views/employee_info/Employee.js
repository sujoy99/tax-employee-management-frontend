import * as Yup from 'yup';

class EmployeeModel {

    /**
     * Model properties
     */
    constructor() {
        this.firstName = "";
        this.lastName = "";
        this.joiningDate = "";
        this.tinNumber = "";
        this.terminationDate = "";
        this.salaryStructure = "";
        this.isActive = "";
    }

    /**
     * Get model instance from json
     */
    fromJson(data) { console.log("d", data);
        let obj = {};
        if (data.id !== undefined && data.id) {
            obj.id = data.id;
        }
        obj.firstName = data.firstName ?? "";
        obj.lastName = data.lastName ?? "";
        obj.tinNumber = data.tinNumber ?? "";
        obj.joiningDate = data.joiningDate ?? "";
        obj.salaryStructure = data.salaryStructure.id ?? "";
        console.log("sujoy",obj)

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
        data.append("request", new EmployeeModel().toString(obj));
        return data;
    }

    /**
     * Get string from model instance
     */
    toString(data = {}) {
        let obj = new EmployeeModel()
            .fromJson(data);
        return JSON.stringify(obj);
    }

    /**
     * Validator schema
     */
    validator() {
        return Yup.object().shape({
            firstName: Yup.string().required("First name is a required field!"),
            lastName: Yup.string().required("Last name is a required field!"),
            joiningDate: Yup.string().required("Joining Date is a required field!"),
            tinNumber: Yup.string().required("TIN Number is a required field!"),
            salaryStructure: Yup.string().required("Salary Structure is a required field!")
        });
    }

}

export const Employee = new EmployeeModel();

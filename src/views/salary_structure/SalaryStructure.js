import * as Yup from 'yup';

class SalaryStructureModel {
    constructor() {
        this.name = "";
        this.salaryStructureLineItems = [{salaryTypeId: "", percentage:""}];
    }

    fromJson(data = '') {
        let obj = new SalaryStructureModel();
        // if (data.id !== undefined && data.id) {
        //     obj.id = data.id;
        // }
        // obj.salaryTypeName = data.salaryTypeName ?? "";
        // obj.studentTypeDescription = data.studentTypeDescription ?? "";
        // obj.salary = data.salaryTypes ?? [{name: ""}] 

        return obj;
    }

    toFormData(obj = {}) {
        let data = new FormData();
        data.append("request", new SalaryStructureModel().toString(obj));
        return data;
    }

    /**
     * Get string from model instance
     */
    toString(data = {}) {
        let obj = new SalaryStructureModel()
            .fromJson(data);
        return JSON.stringify(obj);
    }

     /**
     * Validator schema
     */
     validator() {
        return Yup.object().shape({
            name: Yup.string().required("Name is a required field!"),
        });
    }

}

export const SalaryStructure = new SalaryStructureModel(); 
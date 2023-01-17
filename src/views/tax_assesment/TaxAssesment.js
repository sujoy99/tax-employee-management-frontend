import * as Yup from "yup";

class TaxAssesmentModel {
  /**
   * Model properties
   */
  constructor() {
    this.name = "";
    this.year = "";
    this.taxAssesmentLineItem = [
      {
        TaxAmount: "",
        IsPercentage: "",
        DependentOn: "",
        SalaryTypeId: "",
      },
    ];
  }

  /**
   * Get model instance from json
   */
  fromJson(data) {
    let obj = {};
    // if (Object.keys(data).length !== 0) {
    //   if (data.id !== undefined && data.id) {
    //     obj.id = data.id;
    //   }
    //   obj.firstName = data.firstName ?? "";
    //   obj.lastName = data.lastName ?? "";
    //   obj.tinNumber = data.tinNumber ?? "";
    //   obj.joiningDate = data.joiningDate ?? "";
    //   obj.salaryStructure = data.salaryStructure.id ?? "";
    // }
    return obj;
  }

  /**
   * Get string from model instance
   */
  toFormData(obj = {}) {
    let data = new FormData();
    data.append("request", new TaxAssesmentModel().toString(obj));
    return data;
  }

  /**
   * Get string from model instance
   */
  toString(data = {}) {
    let obj = new TaxAssesmentModel().fromJson(data);
    return JSON.stringify(obj);
  }

  /**
   * Validator schema
   */
  validator() {
    return Yup.object().shape({
      name: Yup.string().required("Name is a required field!"),
      year: Yup.string().required("Year is a required field!"),
    });
  }
}

export const TaxAssesment = new TaxAssesmentModel();

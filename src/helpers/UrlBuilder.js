
class UrlBuilderHelper {

    taxCalculationApi(path) {
        return `http://${process.env.REACT_APP_TAX_CALCULATION_HOST}:${process.env.REACT_APP_TAX_CALCULATION_PORT}/api/v1/${path}`;
    }

    taxEmployeeManagementApi(path) {
        return `http://${process.env.REACT_APP_TAX_EMPLOYEE_MANAGEMENT_HOST}:${process.env.REACT_APP_TAX_EMPLOYEE_MANAGEMENT_PORT}/${path}`;
    };
}

export const UrlBuilder = new UrlBuilderHelper();

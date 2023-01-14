class UrlBuilderHelper {

    taxCalculationApi(path) {
        return `http://localhost:8000/api/v1/${path}`;
    }

    taxEmployeeManagementApi(path) {
        return `http://10.0.2.230:8080/${path}`;
    };
}

export const UrlBuilder = new UrlBuilderHelper();

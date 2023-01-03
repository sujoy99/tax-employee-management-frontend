class UrlBuilderHelper {

    taxCalculationApi(path) {
        return `http://localhost:8000/api/v1/${path}`;
    }

    taxEmployeeManagementApi(path) {
        return `http://localhost:8005/api/v1/${path}`;
    };
}

export const UrlBuilder = new UrlBuilderHelper();

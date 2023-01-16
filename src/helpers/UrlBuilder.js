class UrlBuilderHelper {

    taxCalculationApi(path) {
        return `http://localhost:8000/api/v1/${path}`;
    }

    taxEmployeeManagementApi(path) {
        return `http://192.168.0.105:8080/${path}`;
    };
}

export const UrlBuilder = new UrlBuilderHelper();

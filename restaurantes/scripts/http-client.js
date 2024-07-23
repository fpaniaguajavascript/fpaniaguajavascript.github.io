function doGetHTTPRequest(url, port, resource, callbackFunction, callbackErrorFunction) {
    fetch(`${url}:${port}/${resource}`)
        .then(response => {
            if (response.ok) {
                return response.text();
            }
            else {
                throw new Error(`Ha ocurrido un error ${response.status}`);
            }
        })
        .then(data => {
            callbackFunction(data)
        })
        .catch(error => {
            callbackErrorFunction(error);
        });
}
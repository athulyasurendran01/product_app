export function fetchProducts() {
    return dispatch => {
        dispatch(fetchProductPending());
        fetch('https://5e902d652810f4001648ab40.mockapi.io/api/v1/products')
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    throw (res.error);
                }
                dispatch(fetchProductSuccess(res));
                return res;
            })
            .catch(error => {
                console.log(error)
                dispatch(fetchProductError(error));
            })
    }
}

export function addProduct(res) {
    return dispatch => {
        dispatch(addProductSuccess(res));
    }
}

export function removeProduct(id) {
    return dispatch => {
        dispatch(removeProductSuccess(id));
    }
}

export function fetchSingleProduct(name) {
    return dispatch => {
        dispatch(FetchSingleProductSuccess(name));
    }
}

// Fetch Product
export function fetchProductPending() {
    return {
        type: 'FETCH_PRODUCT_PENDING'
    }
}

export function fetchProductSuccess(data) {
    return {
        type: 'FETCH_PRODUCT_SUCCESS',
        data: data
    }
}

export function fetchProductError(error) {
    return {
        type: 'FETCH_PRODUCT_ERROR',
        error: error
    }
}

// Add Product
export function addProductSuccess(data) {
    return {
        type: 'ADD_PRODUCT_SUCCESS',
        data: data
    }
}

// Remove Product
export function removeProductSuccess(id) {
    return {
        type: 'REMOVE_PRODUCT_SUCCESS',
        data: id
    }
}

// Fetch Single Product using ID
export function FetchSingleProductSuccess(prodId) {
    return {
        type: 'SINGLE_PRODUCT_SUCCESS',
        data: prodId
    }
}

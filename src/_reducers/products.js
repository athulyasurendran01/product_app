const initialState = {
    status: false,
    products: [],
    selectedProduct: '',
    val: false
}


const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_PRODUCT_PENDING':
            return {
                ...state,
                status: false
            }
        case 'FETCH_PRODUCT_SUCCESS':
            return {
                ...state,
                status: true,
                products: action.data
            }
        case 'FETCH_PRODUCT_ERROR':
            return {
                ...state,
                status: false,
                error: action.error
            }
        case 'ADD_PRODUCT_SUCCESS':
            let data = [];
            if (action.data.id) {
                state.products.find(item => {
                    if (item.id == action.data.id) {
                        item.name = action.data.name
                    }
                });
                data = [...state.products]
            }else{
                data = [...state.products, action.data]
            }
            return {
                ...state,
                status: true,
                products: data
            }
        case 'REMOVE_PRODUCT_SUCCESS':
            state.products.splice(action.data, 1);
            return {
                ...state,
                status: true,
                products: [...state.products]
            }
        case 'SINGLE_PRODUCT_SUCCESS':
            return {
                ...state,
                status: true,
                selectedProduct: action.data
            }
        default:
            return state;
    }
}

export default productReducer;
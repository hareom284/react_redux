import { createSlice } from "@reduxjs/toolkit";
export const STATUS = Object.freeze({
    loading: "loading",
    success: "success",
    error: "error"

})
const ProductSlic = createSlice({
    name: "product",
    initialState: {
        data: [],
        status: STATUS.loading
    },
    reducers:
    {
        setProduct(state, action) {
            state.data = action.payload
        },
        setStatus(state, action) {
            state.status = action.payload
        }
    }
});

export const { setProduct, setStatus } = ProductSlic.actions;
export default ProductSlic.reducer;

export function fetchProducts() {
    return async function fetchProductsThunk(dispatch, getState) {
        dispatch(setStatus(STATUS.loading));
        try {
            const product = await fetch("https://fakestoreapi.com/products");
            const items = await product.json();
            dispatch(setProduct(items));
            dispatch(setStatus(STATUS.success))
        } catch (error) {
            dispatch(setStatus(STATUS.error))
        }
    }
}
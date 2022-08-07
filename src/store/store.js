import { configureStore } from "@reduxjs/toolkit";
import cardSlic from "./cardSlic";
import productSlic from "./productSlic";
export default configureStore({
    reducer:
    {
        card: cardSlic,
        product: productSlic
    }
})
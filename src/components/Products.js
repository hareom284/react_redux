import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../store/cardSlic";
import { STATUS } from "../store/productSlic";
import { fetchProducts } from "../store/productSlic";
const Product = () => {
    const dispatch = useDispatch();
    const { data: products, status } = useSelector((state) => state.product);
    const handleAdd = (item) => {
        dispatch(add(item))
    }
    useEffect(() => {
        dispatch(fetchProducts())

    }, [])

    if (status === STATUS.loading) {
        return (
            <h1>Loading .....</h1>
        )
    }
    else if (status === STATUS.success) {

        return (
            <div className="product-items">
                {
                    products.map((product) => (
                        <div className="product-item" key={product.id}>
                            <img src={product.image} alt="a" />
                            <div className="card-info">
                                <span>{product.title}</span>
                                <span>$ {product.price}</span>
                                <button onClick={() => handleAdd(product)}>Add Card</button>
                            </div>

                        </div>

                    ))
                }
            </div>
        )
    }

    else {
        return (
            <h1>Something was fucking wrong!!</h1>
        )
    }



}

export default Product;
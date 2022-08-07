import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cardSlic";
const Card = () => {
    const dispatch = useDispatch();
    const product = useSelector((state) => state.card);
    const handleRemove = (item) => {
        dispatch(remove(item))
    }
    return (
        <div className="card-show">
            {
                product.map((index) => (

                    <div className="card" key={index.id}>
                        <img src={index.image} alt="d" />
                        <div className="card-items">
                            <span>{index.price}</span>
                            <button onClick={() => handleRemove(index.id)}>Remove</button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Card;

import { useNavigate } from "react-router-dom";
import { BsPlus } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
import "./Cart.css";
import { Button } from "react-bootstrap";

const Cart = ({ item, itemModifier, index, handleDeleteProduct,children }) => {




  const { img, title, price, id, stock } = item;

 
  const navigate = useNavigate();

  const navigateToCartDetail = (id) => {
    navigate(`/CartDetail/${id}`);
  };

  

  return (
    <div>
      <div className="cart-container">
        <div>
          <img onClick={() => navigateToCartDetail(id)} src={img} alt="" />
        </div>
        <div className="d-flex">
          <p className="w-100">{title.slice(0,10)}</p>
        </div>
        <div>
          <Button
            onClick={() => itemModifier(index, true)}
            variant="outline-dark"
            size="sm"
          >
            <BsPlus />
          </Button>
          <span className="px-2">{stock}</span>
          <Button
            onClick={() => itemModifier(index, false)}
            variant="outline-dark"
            size="sm"
          >
            <BiMinus />
          </Button>
        </div>
        <div>
          <p>$ {(price * stock).toFixed(2)}</p>
          
        </div>
        <div><Button onClick={()=>handleDeleteProduct(id)} variant="secondary" size="sm">
          X
        </Button></div>
      </div>
    </div>
  );
};

export default Cart;

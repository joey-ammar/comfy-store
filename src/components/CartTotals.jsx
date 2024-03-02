import { useSelector } from "react-redux";
import { formatPrice } from "../utils";

const CartTotals = () => {
  const { cartTotal, shipping, tax, orderTotal } = useSelector(
    (state) => state.cartState
  );
  return (
    <div className="card bg-base-200">
      <div className="card-body">
        {/**SUBTOTAL */}
        <div className="flex justify-between text-xs broder-b border-base-300 pb-2">
          <span>Subtotal</span>
          <span className="font-medium"> {formatPrice(cartTotal)}</span>
        </div>
        {/**Shipping */}
        <div className="flex justify-between text-xs broder-b border-base-300 pb-2">
          <span>Shipping</span>
          <span className="font-medium"> {formatPrice(shipping)}</span>
        </div>
        {/**SUBTOTAL */}
        <div className="flex justify-between text-xs broder-b border-base-300 pb-2">
          <span>Tax</span>
          <span className="font-medium"> {formatPrice(tax)}</span>
        </div>
        {/**SUBTOTAL */}
        <div className="flex justify-between text-sm mt-4 pb-2">
          <span>Order Total</span>
          <span className="font-medium"> {formatPrice(orderTotal)}</span>
        </div>
      </div>
    </div>
  );
};
export default CartTotals;

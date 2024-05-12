import { removeItem } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";
import noPhoto from "../assets/noPhoto.jpg";

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();

  const removeItemFromTheCart = () => {
    dispatch(removeItem({ productID }));
    console.log(productID)
  };
  

  const { productID, TradeName, PublicPrice, ScientificName, MarketingCompany } =
    cartItem;

  return (
    <article
      key={productID}
      className="mb-12 flex flex-col gap-y-4 sm:flex-row flex-wrap border-b border-base-300 pb-6 last:border-b-0"
    >
      {/* IMAGE */}
      <img
        src={noPhoto}
        alt={TradeName}
        className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover"
      />
      {/* INFO */}
      <div className="sm:ml-16 sm:w-48">
        {/* TITLE */}
        <h3 className="capitalize font-medium">{TradeName}</h3>
        {/* COMPANY */}
        <h4 className="mt-2 capitalize text-sm text-neutral-content">
          {MarketingCompany}
        </h4>
        <h4 className="mt-2 capitalize text-sm text-neutral-content">
          {ScientificName}
        </h4>
      </div>
      <div className="sm:ml-12">
        {/* AMOUNT */}
        <div className="form-control max-w-xs"></div>
        {/* REMOVE */}
        <button
          className="mt-2 link link-primary link-hover text-sm"
          onClick={removeItemFromTheCart}
        >
          remove
        </button>
      </div>

      {/* PRICE */}
      <p className="font-medium sm:ml-auto">{PublicPrice}</p>
    </article>
  );
};
export default CartItem;

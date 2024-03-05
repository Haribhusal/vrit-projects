import { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { FaTimes, FaTrash } from "react-icons/fa";

const CartButton = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { cartItems } = useSelector((state) => state.cart);
  // Dispatch action to add item to the cart

  return (
    <div className="group relative">
      <button className="h-full relative" onClick={() => setShowMenu(true)}>
        <div className="count absolute -top-2 -right-3 bg-red-700 rounded-md text-sm p-0 px-1 border-2 border-white text-white">
          {cartItems.length}
        </div>
        <FaCartShopping className="text-purple-600 text-2xl" />
      </button>
      <div
        className={`cartItems  w-96 p-5 absolute top-10 right-0 shadow-md bg-white border-[1px] border-gray-300 rounded-md z-20 ${
          showMenu ? "block" : "hidden"
        }`}
      >
        <div
          onClick={() => setShowMenu(false)}
          className="closeBtn absolute -top-4 -right-4 border-2 border-white cursor-pointer h-8 w-8 bg-red-500 text-white rounded-full flex justify-center items-center"
        >
          <FaTimes />
        </div>
        <div className="heading">
          <h3 className="text-xl mb-3 font-bold uppercase text-gray-600">
            Shopping Cart
          </h3>
        </div>
        <div className="items space-y-3">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="shadow-md rounded-md relative flex gap-3 border-gray-200 border-[1px] py-2 px-3"
              >
                <div className="image">
                  <img
                    src={item.thumbnail}
                    alt=""
                    className="size-16 rounded-lg bg-gray-100 p-2 object-cover"
                  />
                </div>
                <div className="info">
                  <h2 className="text-purple-600 font-bold">{item.title}</h2>
                  <p>
                    {item.price - (item.price * item.discountPercentage) / 100}
                  </p>
                </div>
                <div className="deleteItem closeBtn absolute top-2 -right-4 border-2 border-white cursor-pointer h-8 w-8 bg-red-500 text-white rounded-full flex justify-center items-center ">
                  <FaTrash />
                </div>
              </div>
            ))
          ) : (
            <div>There are no items in the cart</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartButton;

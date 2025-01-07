import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderIceCream, restockIceCream } from "./iceCreamSlice";

const IceCream = () => {
  const iceCreams = useSelector((state) => state.iceCream.numOfIceCreams);

  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number Of IceCreams- {iceCreams}</h2>
      <button
        onClick={() => {
          dispatch(orderIceCream());
        }}
      >
        order
      </button>
      <button
        onClick={() => {
          dispatch(restockIceCream(3));
        }}
      >
        Restock
      </button>
    </div>
  );
};

export default IceCream;

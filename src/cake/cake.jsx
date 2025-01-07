import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderCake, reStockCake } from "./cakeSlice";

const Cake = () => {
  const cakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number Of Cakes-{cakes}</h2>
      <button onClick={() => dispatch(orderCake())}>order</button>
      <button onClick={() => dispatch(reStockCake(5))}>Restock</button>
    </div>
  );
};

export default Cake;

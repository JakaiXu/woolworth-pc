import React from "react";

const ShowSummay = () => {
  return (
    <div className="h-[10rem] border-2 py-[2vh]">
      <div className="flex justify-between px-2">
        <p className="font-bold">Woolworths items</p>
        <p className="font-bold">$0</p>
      </div>
      <div className="flex justify-between px-2">
        <p className="text-sm text-green-700 underline">Estimated delivery fee</p>
        <p>$0.00 - $15.00</p>
      </div>
      <div className="flex justify-between px-2">
        <p className="text-sm text-green-700 underline">Estimated packaging fee</p>
        <p>$0.00 - $2.50</p>
      </div>
      <div className="flex justify-between px-2 pt-2">
        <p className="font-bold">Everyday Market items</p>
        <p className="font-bold">$0</p>
      </div>
      <div className="flex justify-between px-2">
        <p className="text-sm text-green-700 underline">Shipping fee</p>
        <p>$0.00 - $10.00</p>
      </div>
    </div>
  );
};

export default ShowSummay;

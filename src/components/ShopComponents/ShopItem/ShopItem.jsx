import React from "react";
import "./shopItem.css";

const ShopItem = (props) => {
  return (
    <div className="shopItem">
      <div className="shopWrap">
        <div className="shopItem-piece">
          <img className="imgShopItem" src={props.itemUrl} alt="" />
          <h3 className="shopHeader">{props.title}</h3>
        </div>
        <div className="shopItem-detail">
          <label>
            <input className="inputShop" type="number" name="amount" placeholder="Amount" size="5" />
          </label>
          <h3 className="price">{props.price}</h3>
          <button className="shopButton" type="submit">
            ADD TO BASKET
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopItem;

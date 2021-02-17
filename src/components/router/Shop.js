import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';

function Shop() {
  const [items, setItems] = useState([]);

  const fetchShopDetails = async () => {
    //console.log("inside func");
    const data = await fetch(
      "https://fortnite-api.theapinetwork.com/upcoming/get"
    );
    const it = await data.json();
    console.log(it.data);
    setItems(it.data);
  };

  useEffect(() => {
    fetchShopDetails();
  }, []);

  return <>
  {
    items.map((elem)=>(
      <Link to={`/shop/${elem.itemId}`} key={elem.itemId}><p>{elem.item.name}</p></Link>
    ))
  }
  </>;
}

export default Shop;

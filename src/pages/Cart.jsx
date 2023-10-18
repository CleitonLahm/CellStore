// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { getItem, setItem } from "../services/LocalStorageFuncs";
import { BsFillCartDashFill } from "react-icons/bs";
import { ProductsArea } from "../css/styles";

export const Cart = (props) => {
  const [data, setData] = useState(getItem("carrinhoYt") || []);

  const removeItem = (obj) => {
    const arrFilter = data.filter((e) => e.id !== obj.id)
    setData(arrFilter)
    setItem('carrinhoYt', arrFilter)
  }

  const handleClick = () => {
    // eslint-disable-next-line react/prop-types
    const { history: { push } } = props
    push(`/payment/${subTotal}`)
    setItem('carrinhoYt', [])
  }

  const subTotal = data.reduce((acc, cur) => acc + cur.price, 0)

  return (
    <div>
      <h3>{`SubTotal: R$ ${subTotal}`}</h3>
      <ProductsArea>
        {data.map((e) => (
          <div key={e.id}>
            <h4>{e.title}</h4>
            <img src={e.thumbnail} alt={e.title}></img>
            <h4>{`R$ ${e.price}`}</h4>
            <button 
            onClick={() => removeItem(e)}
            >
              <BsFillCartDashFill></BsFillCartDashFill>
            </button>
          </div>
        ))}
      </ProductsArea>
      <button
      disabled = { !subTotal > 0  }
      onClick={ handleClick }
      >
        Comprar
      </button>
    </div>
  );
};

import React, { useState } from "react";
import "./Tarjeta.css";
function Tarjeta({ name, img, price, color }) {
  // Inicializar un hook,
  const [Like, setLike] = useState(false);
  function handleLike() {
    setLike(!Like);
    console.log("hola");
  }
  // esto es lo mismo que hace el if --> el signo de pregunta hace de if y los : el else
  let classLiked = Like === true ? "like pressed" : "like";
  return (
    <>
      <section className="tarjeta">
        <div className="botonLike">
          {" "}
          <button onClick={handleLike} className={classLiked}>
            ❤
          </button>
        </div>
        <div className="tarjetaContenido">
          {" "}
          <h2>{name}</h2>
          <img src={img} alt="" width={200} height={200} />
          <h4>Precio: ${price}</h4>
          <button>Ver más</button>
        </div>
      </section>
    </>
  );
}
export default Tarjeta;

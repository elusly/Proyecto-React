import "./ItemListContainer.css";
import Tarjeta from "../Tarjeta/Tarjeta";

function ItemListContainer() {
  return (
    <div className="flex">
      <Tarjeta name="Producto 1" img="/img/el beso.jpg" price="2000" />
      <Tarjeta name="Producto 2" img="/img/venus.jpg" price="2000" />
      <Tarjeta name="Producto 3" img="/img/starry.jpg" price="3000" />
      <Tarjeta name="Producto 4" img="/img/monalisa.jpg" price="5000" />
      <Tarjeta name="Producto 5" img="/img/dali.jpg" price="2800" />
    </div>
  );
}
export default ItemListContainer;

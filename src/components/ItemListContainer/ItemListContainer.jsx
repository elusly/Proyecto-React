import "./ItemListContainer.css";
import Tarjeta from "../Tarjeta/Tarjeta";

function ItemListContainer() {
  return (
    <div className="flex">
      <Tarjeta name="Producto 1" img="/img/el beso.jpg" price="2000" />
      <Tarjeta name="Producto 2" img="/img/venus.jpg" price="2000">
        {" "}
      </Tarjeta>
    </div>
  );
}
export default ItemListContainer;

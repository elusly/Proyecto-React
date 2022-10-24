import "./ItemListContainer.css";
import Tarjeta from "../Tarjeta/Tarjeta";

function ItemListContainer() {
  return (
    <div className="flex">
      <Tarjeta name="Producto 1" img="/img/pelota2.jpg" price="$2000" />
      <Tarjeta name="Producto 2"> </Tarjeta>
    </div>
  );
}
export default ItemListContainer;

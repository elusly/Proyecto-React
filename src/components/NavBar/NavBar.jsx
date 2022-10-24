import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";

function NavBar(props) {
  return (
    <>
      <div className="NavBar">
        <ul className="ul">
          <li className="">
            <a className="NavBar_a" href="">
              Inicio
            </a>
          </li>

          <li>
            <a className="NavBar_a" href="">
              Productos
            </a>
          </li>
          <li>
            <a className="NavBar_a" href="">
              Envios
            </a>
          </li>
          <li>
            <a className="NavBar_a" href="">
              Preguntas Frecuentes
            </a>
          </li>
          <li>
            <a className="NavBar_a" href="">
              Contacto
            </a>
          </li>
        </ul>

        <h2> {props.name}</h2>
        <CartWidget />
      </div>
    </>
  );
}
export default NavBar;

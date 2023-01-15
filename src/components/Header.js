 import { Link } from "react-router-dom";
 
 export const Title = () =>(
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src="https://tse2.mm.bing.net/th?id=OIP.JvZbJzADRNyduoIFv1GyWgHaFV&pid=Api&P=0"
      />
  </a>
);

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </div>
    </div>


  );
};

export default Header;
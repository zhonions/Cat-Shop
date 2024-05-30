import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Importando Link do React Router
import "./index.css";
import Cart from "../../components/cart";
import { CartStorage } from "../../pages/Adopt/CartStorage";
import { Cat } from "../CatsData";

export const NavbarLayout = () => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState<Cat[]>(CartStorage.getCartItems());

  useEffect(() => {
    const handleStorageChange = () => {
      setCartItems(CartStorage.getCartItems());
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  });

  const NavBarLinks = [
    {
      title: "home",
      url: "/",
    },
    {
      title: "Adotar",
      url: "/adopt",
    },
    {
      title: "Loja",
      url: "/shop",
    },
  ];

  const handleCartClick = () => {
    setShowCart(!showCart);
  };

  return (
    <nav>
      <ul>
        <li className="logo">
          <Link to={NavBarLinks[0].url}>
            <img src="src/assets/imgs/catlogo.png" alt="Home" />
          </Link>
        </li>
        <li>
          <Link to={NavBarLinks[1].url}>{NavBarLinks[1].title}</Link>
        </li>
        <li className="shop">
          <Link to={NavBarLinks[2].url}>{NavBarLinks[2].title}</Link>
        </li>
      </ul>
      <ul>
        <li className="cartIcon">
          <a onClick={handleCartClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="white"
            >
              <path d="M24 3l-.743 2h-1.929l-3.474 12h-13.239l-4.615-11h16.812l-.564 2h-13.24l2.937 7h10.428l3.432-12h4.195zm-15.5 15c-.828 0-1.5.672-1.5 1.5 0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.9-7-1.9 7c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5z" />
            </svg>
          </a>
        </li>
      </ul>
      {showCart && (
        <div className="cartContainer">
          <Cart cartItems={cartItems} onClose={() => setShowCart(false)} />
        </div>
      )}
    </nav>
  );
};

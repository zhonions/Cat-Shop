import { useState, useEffect, useRef } from "react";
import { Cat, fetchCatData } from "../../components/CatsData";
import { NavbarLayout } from "../../components/nabvar";
import Pagination from "../../components/Pagination";
import "./index.css";
import Cart from "../../components/cart";
import { CartStorage } from "./CartStorage";

function Adopt() {
  const [catsData, setCatsData] = useState<{ [key: string]: Cat }>({});
  const [selectedCat, setSelectedCat] = useState<Cat | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState<Cat[]>(CartStorage.getCartItems());
  const modalRef = useRef<HTMLDivElement>(null);
 

  useEffect(() => {
    fetchCatData("https://localhost:8080/adopt")
      .then((data) => {
        setCatsData(data);
      })
      .catch((error) => {
        console.error("Ocorreu um erro:", error);
      });
  }, []);

  const handleCatClick = (cat: Cat) => {
    setSelectedCat(cat);
  };

  const handleAdoptClick = () => {
    if (selectedCat) {
      const updatedCartItems = [...cartItems, selectedCat];
      setCartItems(updatedCartItems);
      setShowCart(true);
      setSelectedCat(null);
    }
  };


  useEffect(() => {
    CartStorage.setCartItems(cartItems);
  }, [cartItems]);

  const handleCloseCart = () => {
    setShowCart(false);
  };

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = Object.values(catsData).slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(Object.values(catsData).length / itemsPerPage);

  useEffect(() => {
    if (showCart) {
      document.body.classList.add("cart-open");
    } else {
      document.body.classList.remove("cart-open");
    }
  }, [showCart]);

  return (
    <>
      <NavbarLayout />
 
      <div className="cat-container">
        {currentItems.map((cat: Cat) => (
          <div
            key={cat.name}
            className="cat-item"
            onClick={() => handleCatClick(cat)}>
            <h3 className="name">{cat.name}</h3>
            <img src={cat.image} alt={cat.name} />
          </div>
        ))}
      </div>
      {selectedCat && (
        <div className="modal">
          <div className="modal-content" ref={modalRef}>
            <button className="close-btn" onClick={() => setSelectedCat(null)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24">
                <path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z" />
              </svg>
            </button>
            <div>
              <h2>{selectedCat.name}</h2>
              <img src={selectedCat.image} alt={selectedCat.name} />
            </div>
            <div className="characteristics">
              <p>Raça: {selectedCat.race}</p>
              <p>Cor: {selectedCat.color}</p>
              <p>Peso: {selectedCat.weight}</p>
              <p>Idade: {selectedCat.age}</p>
              <p>Localização: {selectedCat.location}</p>
              <button onClick={handleAdoptClick}>Adopt</button>
            </div>
          </div>
        </div>
      )}
      {showCart && <Cart cartItems={cartItems} onClose={handleCloseCart} />}
      {showCart && <div className="modal-overlay" onClick={handleCloseCart} />}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        paginate={paginate}
      />
    </>
  );
}

export default Adopt;

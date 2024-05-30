import "./index.css"

type Item = {
  name: string;
  image: string;
};

type Props = {
  cartItems: Item[];
  onClose: () => void;
};


const Cart: React.FC<Props> = ({ cartItems, onClose }) => {

  return (
    <div className="modal" onClick={onClose}>
      <div id="cart">
        <div className="title">
          <h2>Carrinho de Compras</h2>
          <button
            className="close-btn"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
            >
              <path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z" />
            </svg>
          </button>
        </div>
        <ul className="cart-items">
          {cartItems.map((item, index) => (
            <li key={index}>
              <div className="cart-item">
                <img src={item.image} alt={item.name} />
                <div>
                  <p>Nome: {item.name}</p>
                  <p>Preço: €0.00</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Cart;

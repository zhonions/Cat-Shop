import React, { useEffect, useState } from "react";
import "./index.css";
import { NavbarLayout } from "../../components/nabvar";

interface Food {
  name: string;
  price: number;
  quantity: string;
  image: string;
}

const Food: React.FC = () => {
  const [foodData, setFoodData] = useState<Food[]>([]);
  const [cart, setCart] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://localhost:8080/shop');
        if (!response.ok) {
          throw new Error('Erro ao obter os dados.');
        }
        const data: Food[] = await response.json();
        setFoodData(data);
      } catch (error) {
        console.error('Ocorreu um erro:', error);
      }
    };

    fetchData();
  }, []);

  const addToCart = (itemName: string) => {
    setCart([...cart, itemName]);
  };

  return (
    <>
      <NavbarLayout />
      <div className="food-container">
        {foodData.map((food, index) => (
          <div key={index} className="food-item">
            <h3 className="name">{food.name}</h3>
            <img src={food.image} alt={food.name} />
            <p>Preço: {food.price}€</p>
            <p>Quantidade: {food.quantity}</p>
            <button onClick={() => addToCart(food.name)}>Adicionar ao Carrinho</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Food;

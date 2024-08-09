import { Container } from "react-bootstrap";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Category from "./components/Category";
import Item from "./components/Item";
import { items } from "./data";
import { useState } from "react";

function App() {
  const [itemsData, setItemsData] = useState(items);

  const gategory = ["الكل", ...new Set(items.map((elm) => elm.category))];
  console.log(gategory);
  const filterCategory = (cat) => {
    if (cat === "الكل") {
      setItemsData(items);
    } else {
      const newData = items.filter((elm) => elm.category === cat);
      setItemsData(newData);
    }
  };

  const filterSearch = (word) => {
    if (word !== "") {
      const newData = items.filter((elm) => elm.title === word);
      setItemsData(newData);
    }
  };
  return (
    <div className="App">
      <NavBar filterSearch={filterSearch} />
      <Container>
        <Header />
        <Category filterCategory={filterCategory} gategory={gategory} />
        <Item itemsData={itemsData} />
      </Container>
    </div>
  );
}

export default App;

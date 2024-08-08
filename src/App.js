import { Container } from "react-bootstrap";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Category from "./components/Category";
import Item from "./components/Item";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Container>
        <Header />
        <Category />
        <Item />
      </Container>
    </div>
  );
}

export default App;

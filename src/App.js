import logo from "./logo.svg";
import "./App.css";
import { Button } from "@mui/material";
import Header from "./Component/Header";
import ProductsList from "./Component/Productslist";

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{ marginTop: 80 }}>
        <ProductsList />
      </div>
      <Button variant="contained">Click Me</Button>
    </div>
  );
}

export default App;

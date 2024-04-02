import logo from './logo.svg';
import './App.css';
import { Button } from '@mui/material';
import Header from './Component/Header';
import ProductsList from './Component/Productslist';

function App() {
  return (
    <div className="App">
       <Header/>
       <ProductsList/>
      <Button variant="contained">Click Me</Button>
    </div>
  );
}

export default App;
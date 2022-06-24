import Header from "./components/header/Header";
import Cards from "./components/cards/Cards";
import { data } from "./utils/data";
import "./scss/App.scss";
console.log(data);
function App() {
  return (
    <div className="App">
      <Header />
      <Cards />
    </div>
  );
}

export default App;

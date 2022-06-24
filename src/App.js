import Header from "./components/header/Header";
import Cards from "./components/cards/Cards";
import { data } from "./utils/data";
import "./scss/App.scss";
console.log(data);
function App() {
  return (
    <div>
      <Header />

      <div className="container-wrapper">
        <div className="container">
          {data.map((country) => {
            return (
              <Cards
                key={country.id}
                img={country.image}
                title={country.title}
                description={country.desc}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;

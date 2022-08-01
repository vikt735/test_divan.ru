import './assets/css/App.css';
import Card from './components/Card/Card';
import products from '../src/data/products.json';

function App() {
  return (
    <div className="App">
        <h1 className='title'>Ты сегодня покормил кота?</h1>
        <ul className="card-list">
        <Card
          flavorName={products.flavors.foieGras.flavorName}
          flavorDescription={products.flavors.foieGras.flavorDescription}
          weight={products.weight[0]}
          isAvailable={products.flavors.foieGras.isAvailable}
          />
      <Card
          flavorName={products.flavors.fish.flavorName}
          flavorDescription={products.flavors.fish.flavorDescription}
          weight={products.weight[1]}
          isAvailable={products.flavors.fish.isAvailable}
      />
      <Card
          flavorName={products.flavors.chicken.flavorName}
          flavorDescription={products.flavors.chicken.flavorDescription}
          weight={products.weight[2]}
          isAvailable={products.flavors.chicken.isAvailable}
      />
        </ul>
    </div>
  );
}

export default App;

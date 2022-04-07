import Navbar from "./Navbar";
import Hero from "./Hero";
import Card from "./Card";
import data from "./Data";
const App = () => {
  const cardData = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });
  return (
    <>
      <Navbar />
      <Hero />
      <div className="App-photo-container">{cardData}</div>
    </>
  );
};

export default App;

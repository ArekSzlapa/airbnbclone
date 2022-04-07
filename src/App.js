import Navbar from "./Navbar";
import Hero from "./Hero";
import Card from "./Card";
import data from "./Data";
const App = () => {
  const cardData = data.map((item) => {
    return (
      <Card
        img={item.coverImg}
        title={item.title}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        price={item.price}
        location={item.location}
        openSpots={item.openSpots}
      />
    );
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

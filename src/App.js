import Card from "./components/Card";
import CardWallet from "./components/CardWallet";
import Slideshow from "./components/Slideshow";

const App = () => {
    const images = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1z3WO2y5h7YkHljxIsvwuOxP21OE_8tnedA&s",
        "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ_2oII-AssPFNOvcLQ6ecJ6ZWQlUbKU3j8w&s",
        "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg",
        "https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=600&quality=80",
      ];
  return (
    <div id="divContainer">
      <CardWallet title="Green Wallet">
        <Card
          cardNumber="8323 3232 3289 1112"
          userName="John Smith"
          date="18/29"
        />

        <hr />

        <Card
          cardNumber="1111 2222 3333 4444"
          userName="John Smith 2"
          date="18/29"
        />
      </CardWallet>

      <Slideshow 
            images={images}/>
    </div>
  );
};

export default App;

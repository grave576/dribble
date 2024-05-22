import Navbar from "./Navbar";
import Heading from "./Heading";
import Cards from "./Cards";
import houseImage from "./assets/antila.jpeg";
import Negi from "./assets/NItin.jpg";
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Heading />
      <div className=" m-10 grid grid-cols-4 gap-20">
        <Cards image={houseImage} name="Ambabni ki jhopdi" cost={150} />
        <Cards image={houseImage} name="Ambabni ki jhopdi" cost={150} />
        <Cards image={houseImage} name="Ambabni ki jhopdi" cost={150} />
        <Cards image={houseImage} name="Ambabni ki jhopdi" cost={150} />
        <Cards image={houseImage} name="Ambabni ki jhopdi" cost={150} />
        <Cards image={Negi} name="Nitin Ka bungalow " cost={99999999} />
      </div>
    </>
  );
}

export default App;

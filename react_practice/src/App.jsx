import "./App.css";
import { CarComponent } from "../components/carComponent";
import { Timer } from "../components/timer";
import { ColorChange } from "../components/colorchange";
import { CalCulation } from "../components/calCulation";
function App() {
  return (
    <>
      <CarComponent />
      <Timer />
      <ColorChange />
      <CalCulation />
    </>
  );
}

export default App;

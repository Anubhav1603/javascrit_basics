import "./App.css";
import { CarComponent } from "../components/carComponent";
import { Timer } from "../components/timer";
import { ColorChange } from "../components/colorchange";
function App() {
  return (
    <>
      <CarComponent />
      <Timer />
      <ColorChange />
    </>
  );
}

export default App;

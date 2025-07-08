import "./App.css";
import { CarComponent } from "../components/carComponent";
import { Timer } from "../components/timer";
import { ColorChange } from "../components/colorchange";
import { CalCulation } from "../components/calCulation";
import { Callback } from "../components/callback";
import { Book } from "../components/book";
import { BetterCount } from "../components/usereducer";
function App() {
  return (
    <>
      <CarComponent />
      <Timer />
      <ColorChange />
      <CalCulation />
      <Callback />
      <Book />
      <BetterCount />
    </>
  );
}

export default App;

import Conditional from "./components/Conditional";
import CounterEx from "./components/CounterEx";
import FormHandling from "./components/FormHandling";
import Greet from "./components/Greet"
import JsxExample from "./components/JsxExample";
import Listrendering from "./components/Listrendering";
import Parent from "./components/Parent";
import PropExample from "./components/PropExample";
import PropExample2 from "./components/PropExample2";
import SetstateEx from "./components/SetstateEx";
import StateExample from "./components/StateExample";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
         Hello World
        </h1>
      </header>
      <Greet/>
      <Welcome/>
      <JsxExample/>
      <PropExample name="Ajay" place="Kavali"/>
      <PropExample2 name="Class Component"/>
      <StateExample/>
      <SetstateEx/>
      <CounterEx/>
      <Parent/>
      <Conditional/>
      <Listrendering/>
      <FormHandling/>
    </div>

  );
}

export default App;

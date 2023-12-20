import UseEffectsHook from "./hooks/UseEffectsHook";
import UseStateHook from "./hooks/UseStateHook";
import UseContextHook from "./hooks/UseContextHook";
import UseRefHook from "./hooks/UseRefHook";

function App() {
  return (
    <div className="App">
      <UseStateHook />
      <hr/>
      {/* <UseEffectsHook /> */}
      {/* <UseContextHook /> */}
      <UseRefHook />
    </div>
  );
}

export default App;

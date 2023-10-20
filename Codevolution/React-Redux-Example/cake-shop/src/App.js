import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import HooksCakeContainer from "./components/HooksCakeContainer";
import ItemContainer from "./components/ItemContainer";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ItemContainer cake />
        <HooksCakeContainer />
        <CakeContainer />
      </div>
    </Provider>
  );
}

export default App;

import { Provider } from "react-redux";
import Counter from "./components/Counter";
import store from "./redux/store";
import "./App.css";

// store.subscribe(() => console.log(store.getState()));

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;

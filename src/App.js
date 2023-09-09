import "./App.css";
import Homepage from "./pages/Homepage";
import { Route } from "react-router-dom";
import Chatpages from "./pages/Chatpages";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Homepage} exact />
      <Route path="/chats" component={Chatpages} />
    </div>
  );
}

export default App;
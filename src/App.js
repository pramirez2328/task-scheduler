import "./App.css";
import Header from "./components/header";
import Nav from "./components/nav";
import Content from "./components/content";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container p-0 mt-3">
      <Nav />
      <Header />
      <Content />
    </div>
  );
}

export default App;

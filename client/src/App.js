import "./App.css";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import ListUsers from "./components/ListUsers/ListUsers";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <section className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/listusers" element={<ListUsers />} />
      </Routes>
    </section>
  );
}

export default App;

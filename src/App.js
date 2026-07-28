import './App.css';
import Navbar from "./components/Navbar";
import TodosPage from "./pages/TodosPage";
import ContactPage from "./pages/ContactPage";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (

    <div className="App">
  <Navbar />
  <Routes>
  <Route path="/" element={<Navigate to="/todos" replace />} />
  <Route path="/todos" element={<TodosPage />} />
  <Route path="/contact" element={<ContactPage />} />
</Routes>
<footer className="footer">
  <p>© 2026 TaskBloom | Built with React</p>
</footer>
    </div>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage, AuthPage } from "./app/utils/exports";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/register" element={<AuthPage />} />
      </Routes>
    </div>
  );
}

export default App;

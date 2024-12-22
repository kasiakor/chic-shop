import { Route, Routes } from "react-router-dom";
import Home from "../src/routes/home/home.component";

const App = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default App;

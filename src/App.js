import { Route, Routes } from "react-router-dom";
import Home from "../src/routes/home/home.component";
import Navigation from "../src/routes/navigation/navigation.component";
import SignIn from "../src/routes/sign-in/sign-in.component";

const Shop = () => {
  return (
    <div>
      <h1>This is the shop</h1>
    </div>
  );
};
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Home from "../src/routes/home/home.component";
import Navigation from "../src/routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Checkout from "./routes/checkout/checkout.component";
import Shop from "./routes/shop/shop.component";
import setCurrentUser from "./store/user/user.actions";
import {
  createUserDocumentFromAuth,
  onAuthStateChangeListener,
} from "./utils/firebase/firebase.utils";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // it receives a callback function
    // onAuthStateChanged method also returns an unsubscriber function which allows
    // us to stop listening for events
    // what is passed is either the authenticated user obj or null
    const unsubscribe = onAuthStateChangeListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;

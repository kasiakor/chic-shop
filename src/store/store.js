import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

// // persist

// const persistConfig = {
//   // persist all
//   key: "root",
//   // local storage
//   storage: storage,
//   // exclude, coming from auth listener
//   whitelist: ["cart"],
// };

const middleWares = [process.env.NODE_ENV === "development" && logger].filter(
  Boolean
);

export const store = configureStore({
  reducer: rootReducer,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
// use redux devtool
// const composeEnhancer =
//   (process.env.NODE_ENV !== "production" &&
//     window &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;

// const composedEnhancers = compose(applyMiddleware(...middleWares));
// const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = createStore(rootReducer, undefined, composedEnhancers);
// export const store = createStore(
//   persistedReducer,
//   undefined,
//   composedEnhancers
// );

// export const persistor = persistStore(store);

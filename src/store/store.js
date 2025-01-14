import { applyMiddleware, compose, createStore } from "redux";
import logger from "redux-logger";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { rootReducer } from "./root-reducer";

// persist

const persistConfig = {
  // persist all
  key: "root",
  // local storage
  storage: storage,
  // exclude, coming from auth listener
  blacklist: ["user"],
};

const middleWares = [logger];

const composedEnhancers = compose(applyMiddleware(...middleWares));

const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = createStore(rootReducer, undefined, composedEnhancers);
export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

export const persistor = persistStore(store);

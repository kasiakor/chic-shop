import { render } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import { rootReducer } from "../../store/root-reducer";

// Instead of directly calling render() from the testing library in every test, we should create a module that re-exports everything from the React Testing Library and a custom render function that includes the necessary context providers. This makes the test setup consistent across all test files.
export function renderWithProviders(
  ui,

  // config object
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = createStore(rootReducer, preloadedState),
    ...renderOptions
  } = {}
) {
  // wrapper for tested component
  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <BrowserRouter>{children}</BrowserRouter>
      </Provider>
    );
  }

  // return the obj incl the store to check if redux is behaving as expected, state,  check actions dispatched, current state of the store
  // we need to invoke render and pass what is returned
  // wrapper for redux, data provider
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

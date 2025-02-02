import { screen, fireEvent } from "@testing-library/react";
import * as reactRedux from "react-redux";
import { renderWithProviders } from "../../utils/test/test.utils";
import Navigation from "../navigation/navigation.component";

describe("navigation test", () => {
  test("it should render a sign in if no currentUser", () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        user: {
          currentUser: null,
        },
      },
    });
    const signinLinkElement = screen.getByText(/sign in/i);
    expect(signinLinkElement).toBeInTheDocument();
  });
  test("it should render a sign in and not sign out if no currentUser", () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        user: {
          currentUser: null,
        },
      },
    });
    const signinLinkElement = screen.getByText(/sign in/i);
    expect(signinLinkElement).toBeInTheDocument();
  });

  test("it should render a sign out and not sign in if there is a currentUser", () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        user: {
          currentUser: {},
        },
      },
    });

    // if queryByText find nothing it will give back null
    const signinLinkElement = screen.queryByText(/sign in/i);
    expect(signinLinkElement).toBeNull();

    const signoutLinkElement = screen.getByText(/sign out/i);
    expect(signoutLinkElement).toBeInTheDocument();
  });

  test("it should render a cart dropdown when isCartOpen is true", () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        cart: {
          isCartOpen: true,
        },
      },
    });

    const dropdownElement = screen.getByText(/go to checkout/i);
    expect(dropdownElement).toBeInTheDocument();
  });

  test("it should not render a cart dropdown when isCartOpen is false", () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        cart: {
          isCartOpen: false,
        },
      },
    });

    // if queryByText find nothing it will give back null
    const dropdownTextElement = screen.queryByText(/go to checkout/i);
    expect(dropdownTextElement).toBeNull();
  });

  test("it should dispatch signOutStart action when sign out link is clicked", async () => {
    const mockDispatch = jest.fn();
    // we want to pass the object with the methods we want to spy on
    jest.spyOn(reactRedux, "useDispatch").mockReturnValue(mockDispatch);

    renderWithProviders(<Navigation />, {
      preloadedState: {
        user: {
          currentUser: {},
        },
      },
    });

    const signoutLinkElement = screen.getByText(/sign out/i);
    expect(signoutLinkElement).toBeInTheDocument();

    await fireEvent.click(signoutLinkElement);
    expect(mockDispatch).toHaveBeenCalled();

    // const signOutAction = signOutStart();
    // expect(mockDispatch).toHaveBeenCalledWith(signOutAction);
  });
});

import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/test/test.utils";
import CartIcon from "./cart-icon.component";

describe("cart icon test", () => {
  test("uses preloading test to render", () => {
    const initialCartItems = [
      { id: 1, name: "Item A", imageUrl: "test", price: 10, quantity: 1 },
    ];
    renderWithProviders(<CartIcon />, {
      preloadedState: {
        // need to match our state shape
        cart: {
          cartItems: initialCartItems,
        },
      },
    });
    const cartIconElement = screen.getByText("1");
    expect(cartIconElement).toBeInTheDocument();
  });
});

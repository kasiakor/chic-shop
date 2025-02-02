import { fireEvent, screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/test/test.utils";
import ProductCard from "./product-card.component";

describe("product card tests", () => {
  test("it should add product card when add product button is clicked", async () => {
    const mockProduct = {
      id: 1,
      name: "Item A",
      imageUrl: "test",
      price: 10,
    };

    // get store by destructuring the return object

    const { store } = renderWithProviders(
      <ProductCard product={mockProduct} />,
      {
        preloadedState: {
          cart: {
            cartItems: [],
          },
        },
      }
    );

    const addToCartButtonElement = screen.getByText(/add to cart/i);
    await fireEvent.click(addToCartButtonElement);
    expect(store.getState().cart.cartItems.length).toBe(1);
  });
});

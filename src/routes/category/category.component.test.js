import { screen } from "@testing-library/react";
import Spinner from "../../components/spinner/spinner.component";
import Category from "../../routes/category/category.component";
import { renderWithProviders } from "../../utils/test/test.utils";

// the library will be mocked and useParams will be changed
// it will be replaced with what we pass
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    category: "mens",
  }),
}));

describe("category tests", () => {
  test("it should load the spinner when isLoading is true", () => {
    renderWithProviders(<Spinner />, {
      preloadedState: {
        categories: {
          isLoading: true,
          categories: [],
        },
      },
    });
    //  const spinnerElement = screen.queryByTestId("spinner") expect null;
    const spinnerElement = screen.getByTestId("spinner");
    expect(spinnerElement).toBeInTheDocument();
  });

  test("it should load categories", () => {
    renderWithProviders(<Category />, {
      preloadedState: {
        categories: {
          //   isLoading: undefined,
          categories: [
            {
              title: "mens",
              items: [
                { id: 1, name: "product 1" },
                { id: 2, name: "product 2" },
              ],
            },
          ],
        },
      },
    });
    //  const spinnerElement = screen.queryByTestId("spinner") expect null;
    const product1Element = screen.getByText(/product 1/i);
    expect(product1Element).toBeInTheDocument();
  });
});

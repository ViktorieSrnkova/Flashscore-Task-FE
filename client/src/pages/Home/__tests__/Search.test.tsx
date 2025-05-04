import { render, screen, fireEvent } from "@testing-library/react";
import Search from "../Search";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("Search Component", () => {
  const setLoading = jest.fn();
  const setData = jest.fn();
  const setSearched = jest.fn();
  const setErrorMessage = jest.fn();

  test("Disables search button when input is empty", () => {
    render(
      <Search
        setLoading={setLoading}
        setData={setData}
        setSearched={setSearched}
        setErrorMessage={setErrorMessage}
      />
    );
    const searchButton = screen.getByText("search");
    expect(searchButton).toHaveClass("disabled");

    const input = screen.getByPlaceholderText("search ...");
    fireEvent.change(input, { target: { value: "cocos" } });

    expect(searchButton).not.toHaveClass("disabled");
  });

  test("Updates query on input change", () => {
    render(
      <Search
        setLoading={setLoading}
        setData={setData}
        setSearched={setSearched}
        setErrorMessage={setErrorMessage}
      />
    );

    const input = screen.getByPlaceholderText("search ...");
    fireEvent.change(input, { target: { value: "cocos" } });

    expect(input).toHaveValue("cocos");
  });

  test("Checks that by default All button is active", () => {
    render(
      <Search
        setLoading={setLoading}
        setData={setData}
        setSearched={setSearched}
        setErrorMessage={setErrorMessage}
      />
    );
    const allButton = screen.getByText("all");
    const eventsButton = screen.getByText("events");
    const teamsButton = screen.getByText("teams");
    expect(allButton).toHaveClass("active");
    expect(eventsButton).not.toHaveClass("active");
    expect(teamsButton).not.toHaveClass("active");
  });
});

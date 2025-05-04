import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Route, Routes, useNavigate } from "react-router-dom";
import Detail from "../Detail";

const mockData = [
  {
    id: "1",
    name: "Test Item",
    defaultCountry: { name: "Test Country" },
    sport: { name: "Test Sport" },
    gender: { name: "Test Gender" },
    type: { name: "TestType" },
    images: [{ path: "test-path" }],
  },
];
beforeAll(() => {
  jest.spyOn(console, "warn").mockImplementation((message) => {
    if (message.includes("React Router Future Flag Warning")) {
      return;
    }
    console.warn(message);
  });
});
test("Displays 'Item not found' when no item is found", () => {
  render(
    <MemoryRouter initialEntries={["/detail/999"]}>
      <Routes>
        <Route path="/detail/:id" element={<Detail data={[]} />} />
      </Routes>
    </MemoryRouter>
  );

  expect(screen.getByText("Item not found")).toBeInTheDocument();
});

test("Displays item details when item is found", () => {
  render(
    <MemoryRouter initialEntries={["/detail/1"]}>
      <Routes>
        <Route path="/detail/:id" element={<Detail data={mockData} />} />
      </Routes>
    </MemoryRouter>
  );

  expect(screen.getByText("Test Item")).toBeInTheDocument();
  expect(screen.getByText("Test Country")).toBeInTheDocument();
  expect(screen.getByText("Test Sport")).toBeInTheDocument();
  expect(screen.getByText("Test Gender")).toBeInTheDocument();
  expect(screen.getByText("Test type")).toBeInTheDocument();
});

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

test("Navigates back to home when 'Back to searching' button is clicked", () => {
  const navigate = jest.fn();
  (useNavigate as jest.Mock).mockReturnValue(navigate);
  render(
    <MemoryRouter initialEntries={["/detail/999"]}>
      <Routes>
        <Route path="/detail/:id" element={<Detail data={[]} />} />
      </Routes>
    </MemoryRouter>
  );

  fireEvent.click(screen.getByText("Back to searching"));
  expect(navigate).toHaveBeenCalledWith("/");
});

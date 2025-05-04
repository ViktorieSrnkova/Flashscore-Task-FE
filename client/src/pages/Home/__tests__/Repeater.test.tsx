import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import Repeater from "../Repeater";

const mockData = [
  {
    id: "1",
    name: "Entity 1",
    sport: { name: "Football" },
    images: [{ path: "image1.jpg" }],
  },
  {
    id: "2",
    name: "Entity 2",
    sport: { name: "Football" },
    images: [{ path: "image2.jpg" }],
  },
  {
    id: "3",
    name: "Entity 3",
    sport: { name: "Basketball" },
    images: [{ path: "image3.jpg" }],
  },
];

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

beforeAll(() => {
  jest.spyOn(console, "warn").mockImplementation((message) => {
    if (message.includes("React Router Future Flag Warning")) {
      return;
    }
    console.warn(message);
  });
});

test("Renders existing results correctly", () => {
  render(
    <MemoryRouter>
      <Repeater data={mockData} searched={true} />
    </MemoryRouter>
  );
  expect(screen.getByText("Football")).toBeInTheDocument();
  expect(screen.getByText("Basketball")).toBeInTheDocument();
  expect(screen.getByText("Entity 1")).toBeInTheDocument();
  expect(screen.getByText("Entity 2")).toBeInTheDocument();
  expect(screen.getByText("Entity 3")).toBeInTheDocument();
});

test("Renders message when 0 results recieved but search happened", () => {
  render(
    <MemoryRouter>
      <Repeater data={[]} searched={true} />
    </MemoryRouter>
  );
  expect(screen.getByText("No results found!")).toBeInTheDocument();
});

test("Renders message when 0 results recieved and no search was yet done", () => {
  render(
    <MemoryRouter>
      <Repeater data={[]} searched={false} />
    </MemoryRouter>
  );
  expect(
    screen.getByText("Start by using the search bar at the top!")
  ).toBeInTheDocument();
});

test("Navigates to the detail page on item click", () => {
  const navigate = jest.fn();
  (useNavigate as jest.Mock).mockReturnValue(navigate);

  render(
    <MemoryRouter initialEntries={["/"]}>
      <Repeater data={mockData} searched={true} />
    </MemoryRouter>
  );

  const entity1 = screen.getByText("Entity 1");
  fireEvent.click(entity1);

  expect(navigate).toHaveBeenCalledWith("/detail/1");
});

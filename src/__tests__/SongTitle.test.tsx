import { render, screen } from "@testing-library/react";
import SongTitle from "../components/SongTitle";
import { describe, it, expect } from "vitest";

describe("SongTitle Component", () => {
  it("renders correctly with title and artist", () => {
    const { asFragment } = render(<SongTitle title="Test Song" artist="Test Artist" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("displays the title in correct heading style", () => {
    render(<SongTitle title="Test Song" artist="Test Artist" />);
    const titleElement = screen.getByText("Test Song");
    expect(titleElement.tagName).toBe("H1");
    expect(titleElement).toHaveClass("text-4xl", "font-semibold", "text-lightText", "dark:text-darkText");
  });

  it("displays the artist in correct paragraph style", () => {
    render(<SongTitle title="Test Song" artist="Test Artist" />);
    const artistElement = screen.getByText("Test Artist");
    expect(artistElement.tagName).toBe("P");
    expect(artistElement).toHaveClass("text-lg", "text-secondary-dark", "dark:text-secondary-light");
  });

  it("applies the correct container styles", () => {
    render(<SongTitle title="Test Song" artist="Test Artist" />);
    const container = screen.getByText("Test Song").parentElement;
    expect(container).toHaveClass(
      "text-center", 
      "bg-lightBackground", 
      "dark:bg-darkBackground", 
      "p-4", 
      "rounded-lg"
    );
  });
});
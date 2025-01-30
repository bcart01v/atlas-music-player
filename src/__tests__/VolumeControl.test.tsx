import { render, screen, fireEvent } from "@testing-library/react";
import VolumeControls from "../components/VolumeControls";
import { describe, it, expect, vi } from "vitest";

describe("VolumeControls Component", () => {
  it("renders correctly at default volume", () => {
    const { asFragment } = render(<VolumeControls volume={50} onVolumeChange={() => {}} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correctly at muted volume", () => {
    const { asFragment } = render(<VolumeControls volume={0} onVolumeChange={() => {}} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correctly at full volume", () => {
    const { asFragment } = render(<VolumeControls volume={100} onVolumeChange={() => {}} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("shows VolumeX icon when muted", () => {
    render(<VolumeControls volume={0} onVolumeChange={() => {}} />);
    expect(screen.getByLabelText("Toggle Mute")).toBeInTheDocument();
    const muteButton = screen.getByLabelText("Toggle Mute");
    expect(muteButton.firstChild).toHaveClass("lucide-volume-x");
  });

  it("shows Volume2 icon when not muted", () => {
    render(<VolumeControls volume={50} onVolumeChange={() => {}} />);
    expect(screen.getByLabelText("Toggle Mute")).toBeInTheDocument();
    const muteButton = screen.getByLabelText("Toggle Mute");
    expect(muteButton.firstChild).toHaveClass("lucide");
    expect(muteButton.firstChild).toHaveClass("lucide-volume2");
  });

  it("calls onVolumeChange when volume slider changes", () => {
    const mockOnVolumeChange = vi.fn();
    render(<VolumeControls volume={50} onVolumeChange={mockOnVolumeChange} />);
    
    const slider = screen.getByRole("slider");
    fireEvent.change(slider, { target: { value: "75" } });
    
    expect(mockOnVolumeChange).toHaveBeenCalledWith(75);
  });

  it("toggles mute correctly", () => {
    const mockOnVolumeChange = vi.fn();
    const { rerender } = render(<VolumeControls volume={50} onVolumeChange={mockOnVolumeChange} />);

    // Click mute
    const muteButton = screen.getByLabelText("Toggle Mute");
    fireEvent.click(muteButton);
    expect(mockOnVolumeChange).toHaveBeenCalledWith(0);

    // Simulate component update with muted volume
    rerender(<VolumeControls volume={0} onVolumeChange={mockOnVolumeChange} />);

    // Click unmute
    fireEvent.click(muteButton);
    expect(mockOnVolumeChange).toHaveBeenCalledWith(50);
  });

  it("updates previous volume when changing volume above 0", () => {
    const mockOnVolumeChange = vi.fn();
    render(<VolumeControls volume={50} onVolumeChange={mockOnVolumeChange} />);
    
    const slider = screen.getByRole("slider");
    
    // Change to new volume
    fireEvent.change(slider, { target: { value: "75" } });
    
    // Click mute then unmute to test previous volume
    const muteButton = screen.getByLabelText("Toggle Mute");
    fireEvent.click(muteButton);
    fireEvent.click(muteButton);
    
    expect(mockOnVolumeChange).toHaveBeenCalledWith(75);
  });
});
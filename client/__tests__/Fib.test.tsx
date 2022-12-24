import { render, screen } from "@testing-library/react"
import { Fib } from "../src/components/Fib"

describe("Register component", () => {
    it("should render Register component correctly", () => {
        render(<Fib />);
        const element = screen.getByRole('heading')
        expect(element).toBeInTheDocument();
    });
})
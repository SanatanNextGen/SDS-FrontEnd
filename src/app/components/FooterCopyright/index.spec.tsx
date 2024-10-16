import FooterCopyright from ".";
import { render } from "@testing-library/react";

describe("<FooterCopyright/>", () => {
  it("should render the copyright text with the current year and styling", () => {
    const { getByText, container } = render(<FooterCopyright />);

    const copyrightTextElement = getByText(
      `© SDS ${new Date().getFullYear()}. All rights reserved.`
    );
    expect(copyrightTextElement).toBeInTheDocument();
    expect(copyrightTextElement).toHaveClass("text-xs");
    expect(copyrightTextElement).toHaveClass("text-secondary");
    expect(container.firstChild).toHaveClass("mb-20");
    expect(container.firstChild).toHaveClass("mt-8");
    expect(container.firstChild).toHaveClass("flex");
    expect(container.firstChild).toHaveClass("items-center");
    expect(container.firstChild).toHaveClass("justify-center");
  });
});

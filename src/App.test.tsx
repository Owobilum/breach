import { expect } from "vitest";

import { render, screen, userEvent } from "./utils/test-utlis";
import App from "./App";

it("renders", async () => {
  render(<App />);
  const heading = screen.getByRole("heading", {
    level: 1,
    name: /vite \+ react/i,
  });
  userEvent.click(heading);
  expect(heading).toBeVisible();

  const btn = screen.getByRole("button", {
    name: "count is 0",
  });

  expect(btn).toBeInTheDocument();

  await userEvent.click(btn);

  screen.debug();

  expect(btn).toHaveTextContent("count is 1");
});

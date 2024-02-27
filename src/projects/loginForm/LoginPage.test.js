import { render } from "@testing-library/react";
import LoginPage from "./LoginPage";

describe("LoginPage Components are initialised properly", () => {
  test("Login error message should initialise as blank", () => {
    const { getByTestId } = render(<LoginPage />);
    const loginErrorMessageText = getByTestId(
      "login-form-user-response",
    ).textContent;
    expect(loginErrorMessageText).toBe("");
  });
  test("Email input is initialised properly", () => {
    const { getByPlaceholderText } = render(<LoginPage />);
    const emailAddressText = getByPlaceholderText("Email Address").textContent;
    expect(emailAddressText).toBe("");
  });
  test("Password input is initialised properly", () => {
    const { getByPlaceholderText } = render(<LoginPage />);
    const passwordText = getByPlaceholderText("Password").textContent;
    expect(passwordText).toBe("");
  });
  test("Submit button is initialised properly", () => {
    const { getByText } = render(<LoginPage />);
    const submitText = getByText("Submit").textContent;
    expect(submitText).toBe("Submit");
  });
});

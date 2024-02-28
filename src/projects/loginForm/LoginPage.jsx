import MyHeader from "../../globalComponents/myHeader/MyHeader";
import MyContactMe from "../../globalComponents/myContactMe/MyContactMe";
import MyFooter from "../../globalComponents/myFooter/MyFooter";

import "./LoginPage.css";
import { useState } from "react";

function LoginPage() {
  const [loginUserErrorMessage, setLoginUserErrorMessage] = useState("");

  //Code here
  function inputFormatValidation(emailAddress, password) {
    return (
      emailFormatValidation(emailAddress) && passwordFormatValidation(password)
    );
  }
  function emailFormatValidation(emailAddress) {
    if (emailAddress.length <= 0) {
      setLoginUserErrorMessage("Email length must be greater than 0");
      return false;
    }
    if (emailAddress.length > 100) {
      setLoginUserErrorMessage("Email length must be less than 100 characters");
      return false;
    }
    return true;
  }
  function passwordFormatValidation(password) {
    if (password.length <= 0) {
      setLoginUserErrorMessage("Password length must be greater than 0");
      return false;
    }
    if (password.length > 50) {
      setLoginUserErrorMessage(
        "Password length must be less than 50 characters",
      );
      return false;
    }
    return true;
  }

  function formSubmitClickHandler(userInputs) {
    const { emailAddress, password } = userInputs;
    if (!inputFormatValidation(emailAddress, password)) {
      return;
    }
    setLoginUserErrorMessage("User has been logged in!");
    //try log user in (could still be no user in the database)
  }

  return (
    <div>
      <MyHeader />
      <div className="gradient-1"></div>
      <div className="login-page-content">
        <form
          className="login-form"
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const obj = {
              emailAddress: formData.get("email-address-input") ?? "",
              password: formData.get("email-address-input") ?? "",
            };
            formSubmitClickHandler(obj);
          }}
        >
          <p
            id="login-form-user-response"
            data-testid="login-form-user-response"
          >
            {loginUserErrorMessage}
          </p>
          <label htmlFor="email-address-input">
            Email Address
            <input
              name="email-address-input"
              id="email-address-input"
              placeholder="Email Address"
            ></input>
          </label>
          <label htmlFor="password-input">
            Password
            <input
              name="password-input"
              id="password-input"
              placeholder="Password"
            />
          </label>
          <button>Submit</button>
        </form>
      </div>
      <div className="gradient-1"></div>
      <MyContactMe />
      <div className="gradient-1"></div>
      <MyFooter />
    </div>
  );
}

export default LoginPage;

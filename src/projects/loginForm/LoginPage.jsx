import MyHeader from "../../globalComponents/myHeader/MyHeader";
import MyContactMe from "../../globalComponents/myContactMe/MyContactMe";
import MyFooter from "../../globalComponents/myFooter/MyFooter";

import "./LoginPage.css";

function LoginPage() {
  //Code here
  function inputFormatValidation() {
    return emailFormatValidation && passwordFormatValidation;
  }
  function emailFormatValidation() {
    return true;
  }
  function passwordFormatValidation() {
    return true;
  }

  function formSubmitClickHandler() {
    if (!inputFormatValidation()) {
      return;
    }
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
            formSubmitClickHandler();
            console.log(e.target);
          }}
        >
          <p id="login-form-user-response"></p>
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

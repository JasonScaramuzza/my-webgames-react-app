import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary component caught and error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h2>
          There was an error with this listing.{" "}
          <Link to="/pet-adoption">
            Click here to go back to the pet adoption home page.
          </Link>
        </h2>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

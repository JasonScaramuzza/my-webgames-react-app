import { Link } from "react-router-dom";

import MyHeader from "../globalComponents/myHeader/MyHeader";
import MyContactMe from "../globalComponents/myContactMe/MyContactMe";
import MyFooter from "../globalComponents/myFooter/MyFooter";

import "./AboutPage.css";

//MAIN PAGE

function AboutPage() {
  return (
    <div className="about-page">
      <MyHeader />

      <div className="gradient-1"></div>

      <section id="page-content">
        <h2>About Jason Scaramuzza</h2>
        <article></article>
      </section>

      <div className="gradient-1"></div>

      <MyContactMe />

      <div className="gradient-1"></div>

      <MyFooter />
    </div>
  );
}

export default AboutPage;

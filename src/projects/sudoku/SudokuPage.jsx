//import { Link } from 'react-router-dom';
import SudokuGame from "./SudokuGame";
import MyHeader from "../../globalComponents/myHeader/MyHeader";
import MyContactMe from "../../globalComponents/myContactMe/MyContactMe";
import MyFooter from "../../globalComponents/myFooter/MyFooter";

import "./SudokuPage.css";

export function SudokuPage() {
  return (
    <div className="suduko-page">
      <MyHeader />

      <div className="gradient-1"></div>

      <section id="sudoku-intro">
        <div className="heading">
          <h2 className="title">Sudoku</h2>
        </div>
      </section>

      <section id="sudoku-game">
        <div className="sudoku-game-container">{SudokuGame()}</div>
      </section>

      <div className="gradient-1"></div>

      <MyContactMe />

      <div className="gradient-1"></div>

      <MyFooter />
    </div>
  );
}

export default SudokuPage;

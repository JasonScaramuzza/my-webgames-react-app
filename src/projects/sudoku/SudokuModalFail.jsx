/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import "./SudokuModalFail.css";

const SudokuModalFail = ({ onClose, children }) => {
  return (
    <div className="modal-container">
      <div className="modal">
        <div className="modal-header">
          <p className="close" onClick={() => onClose()}>
            &times;
          </p>
        </div>
        <div className="modal-content">{children}</div>
        <div className="modal-footer"></div>
      </div>
    </div>
  );
};

export default SudokuModalFail;

import React from "react";
import './SudokuModalFail.css';



const SudokuModalFail = ({onClose, children}) =>  {
    return(
        <div className="modal-container">
            <div className="modal">
                <div className="modal-header">
                    <p className="close" onClick={() => onClose()}>&times;</p>
                </div>
                <div className="modal-content">
                    {children}
                </div>
                <div className="modal-footer">
                </div>
            </div>
        </div>
    );
}

export default SudokuModalFail;
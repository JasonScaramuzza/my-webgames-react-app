import React from "react";
import './SudokuModalFail.css';



const SudokuModalFail = ({onSubmit, onCancel, onClose, children}) =>  {
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
                    <button className="btn btn-submit" onClick={() => onSubmit()}>Submit</button>
                    <button className="btn btn-close" onClick={() => onCancel()}>Cancel</button>
                </div>
            </div>
        </div>
    );
}

export default SudokuModalFail;
import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';
import FormParking from '../FormParking/FormParking';

//Portals allow React components to render in another part of the DOM that is 
//outside of their parent component. we can use a Portal to mount our Modal component
//to the end of the document.body element, rather than as a child of another component
const Modal = (props) => props.isShowing ? ReactDOM.createPortal(    
    <React.Fragment>       
        <div className="modal-overlay" />
        <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
            <div className="modal">
                <div className="modal-header">
                    <div className="modal-header-title">Einen neuen Parkplatz hinzufügen</div>
                    <button type="button" className="modal-close-button" data-dismiss="modal"
                        aria-label="Close" onClick={props.hide}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>                                      
                <FormParking coordinates={props.coordinates} />                
            </div>
        </div>
    </React.Fragment>, document.body
) : null;

export default Modal;

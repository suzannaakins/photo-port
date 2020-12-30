import React from 'react';

const Modal = ({ onClose, currentPhoto }) => {
    const { name, category, description, index } = currentPhoto;

    return (
        <div className="modalBackdrop">
            <div className="modalContainer">
                <button onClick={onClose} type="button">
                    X
              </button>
                <h3 className="modalTitle">{name}</h3>
                <img src={require(`../../assets/large/${category}/${index}.jpg`).default} alt="current category" />
                <p>
                    {description}
                </p>
            </div>
        </div>
    );
}

export default Modal; 
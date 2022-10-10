import React from "react";

function PopupWithForm({ isOpen, name, title, children, textButton, onClose}) {
    return(
        <div className={`popup popup_theme_${name} ${isOpen ? 'popup_opened' : ''}`}>
                <div className="popup__overlay"></div>
                <div className="popup__content">
                    <h2 className="popup__title">{title}</h2>
                    <form className={`popup__form popup__form-${name}`} name={`${name}-form`} noValidate>
                        {children}
                        <button type="submit" className="button button_theme_save" value="Сохранить" contentEditable="true">{textButton}</button>
                    </form>
                    <button type="button" className="button button_theme_close" aria-label="Закрыть" onClick={onClose}></button>
                </div>
            </div>
    )
}

export default PopupWithForm;
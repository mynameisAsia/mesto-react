import React, { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import Footer from './Footer';
import { api } from '../utils/Api';

function App() {

    useEffect(() => {
        api.getUserInfo()
            .then((res) => {
                setCurrentUser(res);
            })
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        api.getInitialCards()
            .then((res) => {
                setCards(res);
            })
    }, [])


    const [currentUser, setCurrentUser] = useState({});
    const [cards, setCards] = useState([]);

    const [selectedCard, setSelectedCard] = useState({
        name: '',
        link: '',
    });

    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [isImagePopup, setIsImagePopup] = React.useState(false);

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    }

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
    }

    function handleCardClick(card) {
        setIsImagePopup(true);
        setSelectedCard(card);
    }

    function closeAllPopups() {
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setIsImagePopup(false);
        setSelectedCard({});
    }

    return (
        <div className="page">
            <Header />
            <Main
                currentUser={currentUser} 
                cards={cards}
                onEditProfile={handleEditProfileClick} 
                onAddPlace={handleAddPlaceClick} 
                onEditAvatar={handleEditAvatarClick}
                onCardClick={handleCardClick}
            />
            <PopupWithForm name="edit" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} textButton="Сохранить" 
                onClose={closeAllPopups}
                children={
                <>
                    <input type="text" id="name" name="name" className="popup__input popup__input_type_firstname" placeholder="Имя" value="Жак-Ив Кусто" contentEditable="true" minLength="2" maxLength="40" required />
                    <span id="name-error" className="error"></span>
                    <input type="text" id="about" name="about" className="popup__input popup__input_type_job" placeholder="Описание" value="Исследователь океана" contentEditable="true" minLength="2" maxLength="200" required />
                    <span id="about-error" className="error"></span>
                </>
            } />
            <PopupWithForm name="add" title="Новое место" isOpen={isAddPlacePopupOpen} textButton="Создать" 
                onClose={closeAllPopups}
                children={
                <>
                    <input type="text" id="title" name="name" className="popup__input popup__input_type_name" placeholder="Название" value="" contentEditable="true" minLength="2" maxLength="30" required />
                    <span id="title-error" className="error"></span>
                    <input type="url" id="link" name="link" className="popup__input popup__input_type_link" placeholder="Ссылка" value="" contentEditable="true" required />
                    <span id="link-error" className="error"></span>
                </>
            } />
            <PopupWithForm name="avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} textButton="Сохранить" 
                onClose={closeAllPopups}
                children={
                <>
                    <input type="url" id="avatar" name="avatar" className="popup__input popup__input_type_link" placeholder="Ссылка на аватар" value="" contentEditable="true" required />
                    <span id="avatar-error" className="error"></span>
                </>
            } />
            <PopupWithForm name="confirm" title="Вы уверены?" textButton="Да" onClose={closeAllPopups} />
            <ImagePopup onClose={closeAllPopups} card={selectedCard} isOpen={isImagePopup} />
            <Footer />
        </div>
    );
}

export default App;

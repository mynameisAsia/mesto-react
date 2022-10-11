import React, { useEffect } from 'react';
import Card from './Card';

function Main({currentUser, cards, onEditAvatar, onEditProfile, onAddPlace, onCardClick}) {
    
    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');

    useEffect(() => {
        setUserName(currentUser.name);
        setUserDescription(currentUser.about);
        setUserAvatar(currentUser.avatar);
    }, [currentUser])

    return (
        <main className="content">
            <section className="profile">
                <button type="button" className="button button_theme_avatar" onClick={onEditAvatar}></button>
                <img src={userAvatar}  alt="Ава" className="profile__avatar" style={{ backgroundImage: `url(${userAvatar})` }} />
                <div className="profile__container">
                    <div className="profile__info">
                        <h1 className="profile__name">{userName}</h1>
                        <button type="button" className="button button_theme_edit" aria-label="Редактировать" onClick={onEditProfile}></button>
                    </div>
                    <p className="profile__description">{userDescription}</p>
                </div>
                <button type="button" className="button button_theme_add" aria-label="Добавить" onClick={onAddPlace}></button>
            </section>
            <section className="photos">
                <ul className="photos__list">
                    {cards.map((card) => 
                        (<Card 
                            key={card._id}
                            card={card} 
                            title={card.name} 
                            link={card.link}
                            likesCount={card.likes.length}
                            onCardClick={onCardClick}
                        />)
                    )}
                </ul>
            </section>
        </main>
    )
}

export default Main;
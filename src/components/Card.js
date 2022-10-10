import React from "react";

function Card({title, card, link, likesCount, onCardClick}) {
 
    function handleClick() {
        onCardClick(card);
    } 

    return (
        <li className="photos__card">
            <img src={link} alt={title} className="photos__item" style={{ backgroundImage: `url(${link})` }} onClick={handleClick} />
            <button type="button" className="button button_theme_delete"></button>
            <div className="photos__info">
                <h3 className="photos__title">{title}</h3>
                <div className="photos__like-container">
                    <button className="button button_theme_like" aria-label="Лайк"></button>
                    <p className="photos__like-counter">{likesCount}</p>
                </div>
            </div>
        </li>
    )
}

export default Card;
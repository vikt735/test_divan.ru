import React from 'react';

function getServingsAmount(weight) {
    return weight / 0.05;
}

function getGiftMessage(weight) {
    let gift;

    if (weight === 0.5) {
        gift = <li>мышь в подарок</li>;
    } else if (weight === 2) {
        gift = (
            <li>
                <span className="card_gift">2</span> мыши в подарок
            </li>
        );
    } else {
        gift = (
            <li>
                <span className="card_gift">5</span> мышей в подарок
            </li>
        );
    }

    return gift;
}

function getCardClasses(available, selected, stateChanged) {
    let newClass;

    if (available && !selected) {
        newClass = stateChanged ? 'card_default_initial' : 'card_default';
    } else if (selected) {
        newClass = stateChanged ? 'card_selected_initial' : 'card_selected';
    } else if (!available) {
        newClass = 'card_disabled';
    }

    return ['card', newClass];
}

export { getServingsAmount, getGiftMessage, getCardClasses };
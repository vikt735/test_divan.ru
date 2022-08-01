import React from 'react';
import PropTypes from 'prop-types';

function CardMessage(props) {
    const { isAvailable, isSelected, flavorName, flavorDescription, markSelected } = props;

    let message;

    if (isAvailable && isSelected) {
        message = <p className="card_message">{flavorDescription}</p>;
    } else if (isAvailable && !isSelected) {
        message = (
            <p className="card_message">
                Чего сидишь? Порадуй котэ,{' '}
                <button
                    type="button"
                    className="card_btn"
                    onClick={() => markSelected(isSelected)}
                >
                    купи.
                </button>
            </p>
        );
    } else {
        message = <p className="card_message message_disabled">Печалька, {flavorName} закончился.</p>;
    }

    return <div>{message}</div>;
}

CardMessage.propTypes = {
    isAvailable: PropTypes.bool,
    isSelected: PropTypes.bool,
    flavorName: PropTypes.string,
    flavorDescription: PropTypes.string,
    markSelected: PropTypes.func,
};

export default CardMessage;
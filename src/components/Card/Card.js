import React, { useState }  from 'react';
import PropTypes from 'prop-types';
import foto from "../../assets/img/Photo_.png";
import CardMessage from './CardMasseg';
import { getServingsAmount, getGiftMessage, getCardClasses } from '../../utils';

function Card(props) {
  const [isSelected, setIsSelected] = useState(false);
    const [isSelectionChanged, setIsSelectionChanged] = useState(false);
    const { name, tagline, flavorName, flavorDescription, isAvailable, weight } = props;

    const servings = getServingsAmount(weight);

    const gift = getGiftMessage(weight);

    const cardClasses = getCardClasses(isAvailable, isSelected, isSelectionChanged);

    function markSelected(selected) {
        if (isAvailable) {
            setIsSelected(!selected);
            setIsSelectionChanged(true);
        }
    }

  return (
    <li   className={cardClasses.join(' ')}
      onMouseOut={() => setIsSelectionChanged(false)}
      onBlur={() => setIsSelectionChanged(false)}>
      <div className='card_border' onClick={isAvailable ? () => markSelected(isSelected) : null}>
      <div className='card_bg'>
        <div className='card_text'>
          <p className='card_under_tit'>{tagline}</p>
          <h2 className='card_tit'>{name}</h2>
          <h3 className='card_over_tit'>{flavorName}</h3>
          <ul className='card_block_list'>
            <li><span className='card_gift'>{servings}</span> порций</li>
            {gift}
            {servings >= 100 ? <li>заказчик доволен</li> : null}
          </ul>
        </div>
        <div className='card_block__img'>
          <div className='card_img'>
            <img src={foto} alt='foto' />
          </div>
          <div className='card_block_weight'>
            <div className='card_weight'>
              <p className='card_weight__num'>{`${weight}`.replace('.', ',')}</p>
              <p className="card_unit">кг</p>
            </div>
          </div>   
        </div>
      </div>
      </div>
      <CardMessage
        isAvailable={isAvailable}
        isSelected={isSelected}
        flavorName={flavorName}
        flavorDescription={flavorDescription}
        markSelected={markSelected}
      />
    </li>
  )
}

Card.propTypes = {
  name: PropTypes.string,
  tagline: PropTypes.string,
  flavorName: PropTypes.string,
  flavorDescription: PropTypes.string,
  weight: PropTypes.number,
  isAvailable: PropTypes.bool,
};

Card.defaultProps = {
  name: 'Нямушка',
  tagline: 'Сказочное заморское яство',
  flavorName: 'с фуа-гра',
  flavorDescription: 'Печень утки разварная с артишоками.',
  weight: 0.5,
  isAvailable: true,
};

export default Card

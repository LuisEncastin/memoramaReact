import React from 'react';
import PropTypes from 'prop-types';

import Image from './../Image'

import styles from './Card.module.css';

const Card = ({card, onCardClick}) => {

    const onClick = () => {
        onCardClick(card.uniqueId);
    };

    return (
        <div className={`${styles.container}`} onClick={onClick}>
            <div className={`${styles.card} ${card.isShown ? styles.flipped : ''}`}>
                <div className={`${styles.front}`}></div>
                <div className={`${styles.back}`}>
                    <Image url={card.url}/>
                </div>
            </div>
        </div>
    );
};

export default Card;
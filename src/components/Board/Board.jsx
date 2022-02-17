import React from 'react';
import PropTypes from 'prop-types';

import useGetImages from './../../hooks/useGetImages';

import styles from './Board.module.css';

const Board = ({gameOptions}) => {
    const images = useGetImages(gameOptions); //Si quieres board en el mismo espacio, vamos a tener que regresar esto a app.
    console.log({images});

    return <p>Board</p>;
};

export default Board;
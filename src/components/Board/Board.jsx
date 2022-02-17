import React from 'react';
import PropTypes from 'prop-types';

import styles from './Board.module.css';

import useGetImages from './hooks/useGetImages'

const Board = (gameOptions) => {
    const images = useGetImages(gameOptions);
    console.log({images});

    return <p>Board</p>;
};

export default Board;
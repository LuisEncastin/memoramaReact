import { useEffect, useState  } from "react";

import { getFormedData, getPairedPics, addUniqueIds, shuffleCards } from "./../utils";

const MAX_VISIBLE_CARDS = 2;

const PACES = {
    easy: 1500,
    medium: 1000,
    hard: 500,
    pro: 200,
};

const useGameLogic = (images, gamePace) => {
    const [score, setScore] = useState(0);
    const [isWin, setIsWin] = useState(false);
    const [cards, setCards] = useState([]);
    const [visibleCards, setVisibleCards] = useState([]);

    const prepareCards = () => {

        const formedData = getFormedData(images);
        const pairedPics = getPairedPics(formedData);
        const uniqueIds = addUniqueIds(pairedPics);
        const shuffledCards = shuffleCards(uniqueIds)
        setCards(shuffledCards);
    }

    const flipCard = clickedCardId => {
        const flippedCards = cards.map(card=> {
            if (card.uniqueId === clickedCardId) {
                card.isShown = true;
            }
            if (card.isShown) setVisibleCards(oldState => [...oldState, card.uniqueId]);

            return card;
        });

        setCards(flippedCards);
    };

    const onCardClick = clickedCardId => {
        if (visibleCards.length < MAX_VISIBLE_CARDS) {
            flipCard(clickedCardId);
        }
    };

    const updateScore = () => {
        setScore(oldScore => oldScore + 1);
    };

    const checkMatch = () => {
        const visible = cards.filter(card => visibleCards.indexOf(card.uniqueId) !== -1);

        const matched = visible[0].id === visible[1].id;

        const updatedCards = cards.map(card => {
            if (visibleCards.indexOf(card.uniqueId) !== -1) {
                card.isShown = false;
                card.isFound = matched;
            }

            return card;
        });

        setTimeout(() => {
            setCards(updatedCards);
            setVisibleCards([]);
            if (matched) updateScore();
        }, PACES[gamePace]);
    };

    useEffect(() => {
        if (images.length > 0) prepareCards();
    }, [images]);

    useEffect(() => {
        if (visibleCards.length >= MAX_VISIBLE_CARDS) {
            checkMatch();
        }
    }, [visibleCards]);

    useEffect(() => {
        if (images.length && score === images.length) {
            setIsWin(true);
        }
    }, [score]);

    return { cards, onCardClick, isWin };
};

export default useGameLogic;
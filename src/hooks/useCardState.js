import { useEffect, useReducer, useState } from 'react';

const initialState = {
  cardNumber: ['', '', '', ''],
  expireMonth: '',
  expireYear: '',
  userName: '',
  securityCode: '',
  cardPassword: '',
};

const cardNumberFormatter = (cardNumber) => cardNumber.replace(/[^0-9]/g, '');

function reducer(state, { type, contents }) {
  const newState = { ...state };

  switch (type) {
    case 'cardNumber': {
      const { index, value } = contents;
      newState.cardNumber[index] = cardNumberFormatter(value);
      break;
    }
    case 'userName': {
      newState.userName = contents.toUpperCase();
      break;
    }
    default:
      newState[type] = contents;
  }

  return newState;
}

const isInputComplete = (state) => {
  const necessaryInputState = { ...state };

  delete necessaryInputState.userName;

  return Object.entries(necessaryInputState).every(([_, value]) => value !== '');
};

const useCardState = () => {
  const [cardState, dispatch] = useReducer(reducer, initialState);
  const [isComplete, setComplete] = useState(false);

  useEffect(() => {
    setComplete(isInputComplete(cardState));
  }, [cardState]);

  return [{ ...cardState, isComplete }, dispatch];
};

export default useCardState;

import PropTypes from 'prop-types';
import { useState } from 'react';

import FieldSet from 'components/@common/FieldSet';
import TextField from 'components/@common/TextField';

import { validateCardPassword } from 'validators';
import { CARD_PASSWORD } from 'constants';

function CardPasswordField({ cardPassword, onChange }) {
  const [errorMessage, setErrorMessage] = useState('');

  const onBlurCardPassword = () => {
    try {
      validateCardPassword(cardPassword);
      setErrorMessage(null);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <FieldSet title="카드 비밀번호" inputWidth={25} errorMessage={errorMessage}>
      <TextField
        type="password"
        name="cardPassword"
        value={cardPassword}
        onChange={onChange}
        onBlur={onBlurCardPassword}
        maxLength={CARD_PASSWORD.MAX_LENGTH}
      />
    </FieldSet>
  );
}

CardPasswordField.defaultProps = {
  cardPassword: '',
};

CardPasswordField.propTypes = {
  cardPassword: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default CardPasswordField;
import PropTypes from 'prop-types';
import useErrorMessage from 'hooks/useErrorMessage';

import FieldSet from 'components/@common/FieldSet';
import TextField from 'components/@common/TextField';

import { CARD_PASSWORD } from 'constants';
import { validateCardPassword } from 'validators';

function CardPasswordField({ cardPassword, onChange }) {
  const { errorMessage, handleError } = useErrorMessage({
    state: cardPassword,
    validate: validateCardPassword,
  });

  return (
    <FieldSet title="카드 비밀번호" inputWidth={50} errorMessage={errorMessage}>
      <TextField
        type="password"
        name={CARD_PASSWORD.TEXT_FIELD_NAME}
        value={cardPassword}
        placeholder="앞 2자리"
        maxLength={CARD_PASSWORD.LENGTH}
        onChange={onChange}
        onBlur={handleError}
      />
      <div className="input-security-masking" />
      <div className="input-security-masking" />
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

import PropTypes from 'prop-types';

const cardNumberFormatter = (cardNumber) => {
  const newCardNumber = [...cardNumber].map((unit) => (unit === '' ? '0000' : unit));
  const maskingIndexes = [2, 3];

  maskingIndexes.forEach((index) => {
    if (newCardNumber.length <= index) return;

    newCardNumber[index] = '⦁'.repeat(newCardNumber[index].length);
  });

  return newCardNumber.join('-');
};

function Card({ companyName, cardNumber, userName, expireMonth, expireYear }) {
  return (
    <div className="card-box">
      <div className="small-card">
        <div className="card-top">
          <span className="card-text">{companyName}</span>
        </div>
        <div className="card-bottom">
          <div className="card-bottom__number">
            <span className="card-text">{cardNumberFormatter(cardNumber)}</span>
          </div>
          <div className="card-bottom__info">
            <span className="card-text user-name">{userName}</span>
            <span className="card-text expire-date">
              {expireMonth && expireYear && `${expireMonth} / ${expireYear}`}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

Card.defaultProps = {
  companyName: '',
  cardNumber: ['', '', '', ''],
  userName: '',
  expireMonth: '',
  expireYear: '',
};

Card.propTypes = {
  companyName: PropTypes.string,
  cardNumber: PropTypes.arrayOf(PropTypes.string),
  userName: PropTypes.string,
  expireMonth: PropTypes.string,
  expireYear: PropTypes.string,
};

export default Card;

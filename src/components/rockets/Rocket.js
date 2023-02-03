import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styles from './css/Rocket.module.scss';
import {
  makeReservation,
  cancelReservation,
} from '../../redux/rockets/rocketsSlice';

const Button = ({ rocketId, isReserved }) => {
  const dispatch = useDispatch();
  if (isReserved) {
    return (
      <button
        type="button"
        className={styles.cancel__btn}
        onClick={() => dispatch(cancelReservation(rocketId))}
      >
        Cancel Reservation
      </button>
    );
  }
  return (
    <button
      type="button"
      className={styles.reserve__btn}
      onClick={() => dispatch(makeReservation(rocketId))}
    >
      Reserve Rocket
    </button>
  );
};

const Rocket = (props) => {
  const { rocket } = props;

  return (
    <div className={styles.rocketContainer}>
      <img
        src={rocket.flickr_images[1]}
        alt="rocket img"
        className={styles.rocketImg}
      />
      <div className={styles.col2}>
        <h2>{rocket.name}</h2>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          {rocket.reserved && <p className={styles.reservedText}>Reserved</p>}
          <p>{rocket.description}</p>
        </div>
        <Button rocketId={rocket.id} isReserved={rocket.reserved} />
      </div>
    </div>
  );
};

Rocket.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    flickr_images: PropTypes.arrayOf(PropTypes.string),
    reserved: PropTypes.bool,
  }).isRequired,
};
Button.propTypes = {
  isReserved: PropTypes.bool.isRequired,
  rocketId: PropTypes.string.isRequired,
};

export default Rocket;

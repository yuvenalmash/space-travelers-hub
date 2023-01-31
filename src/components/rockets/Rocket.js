/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import styles from './css/Rocket.module.scss';

const Rocket = (props) => {
  const { rocket } = props;
  const { name, description, img } = rocket;
  return (
    <div className={styles.rocketContainer}>
      <img src={img} alt="rocket img" className={styles.rocketImg} />
      <div className={styles.col2}>
        <h2>{name}</h2>
        <p>{description}</p>
        <button type="button">Reserve Rocket</button>
        <button type="button">Cancel Reservation</button>
      </div>
    </div>
  );
};

Rocket.propTypes = {
  rocket: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Rocket;

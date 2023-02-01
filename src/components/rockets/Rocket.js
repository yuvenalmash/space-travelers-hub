/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
// import store from '../../redux/ConfigureStore';
import styles from './css/Rocket.module.scss';
import { makeReservation } from '../../redux/rockets/rocketsSlice';

const Rocket = props => {
  const { rocket } = props;
  const { id, name, description, flickr_images } = rocket;
  const dispatch = useDispatch();

  const handleReservation = () => {
    dispatch(makeReservation(id));
    // console.log(store.getState());
  };

  return (
    <div className={styles.rocketContainer}>
      <img src={flickr_images} alt="rocket img" className={styles.rocketImg} />
      <div className={styles.col2}>
        <h2>{name}</h2>
        <p>{description}</p>
        <button type="button" onClick={handleReservation}>
          Reserve Rocket
        </button>
        <button type="button">Cancel Reservation</button>
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
  }).isRequired,
};

export default Rocket;

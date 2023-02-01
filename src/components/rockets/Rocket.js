/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styles from './css/Rocket.module.scss';
import { makeReservation, cancelReservation } from '../../redux/rockets/rocketsSlice';

const Button = ({ isReserved, id }) => {
  const dispatch = useDispatch();
  if (isReserved) {
    return <button type="button" onClick={() => dispatch(cancelReservation(id))}>Cancel Reservation</button>;
  }
  return <button type="button" onClick={() => dispatch(makeReservation(id))}>Reserve Rocket</button>;
};

const Rocket = (props) => {
  const { rocket } = props;
  const {
    id, name, description, flickr_images, reserved,
  } = rocket;

  return (
    <div className={styles.rocketContainer}>
      <img src={flickr_images} alt="rocket img" className={styles.rocketImg} />
      <div className={styles.col2}>
        <h2>{name}</h2>
        <p>{description}</p>
        <Button id={id} isReserved={reserved} />
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

export default Rocket;

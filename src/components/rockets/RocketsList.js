import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Rocket from './Rocket';
import { fetchRockets, selectAllRockets, selectState } from '../../redux/rockets/rocketsSlice';
import styles from './css/RocketsList.module.scss';

const RocketsList = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectState);
  const contents = useSelector((state) => state.rockets.contents);
  useEffect(() => {
    if (contents.length === 0 && status === 'idle') {
      dispatch(fetchRockets());
    }
  });
  const rockets = useSelector(selectAllRockets);
  return (
    <ul className={styles.rocketsList}>
      {rockets.map((rocket) => (
        <Rocket
          key={rocket.id}
          rocket={rocket}
        />
      ))}
    </ul>
  );
};

export default RocketsList;

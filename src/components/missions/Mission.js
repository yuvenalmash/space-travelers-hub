/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import './css/Mission.css';

const Mission = (props) => {
  const { mission } = props;
  const { mission_name, description } = mission;

  return (
    <div className="mission-list">
      <h1>{mission_name}</h1>
      <p>{description}</p>
      <button type="button"> Join Mission</button>
    </div>
  );
};

Mission.propTypes = {
  mission: PropTypes.shape({
    mission_name: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default Mission;

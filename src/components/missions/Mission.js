/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import './css/Mission.css';
import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { joinMission } from '../../redux/missions/missionsSlice';

const Mission = (props) => {
  const { mission } = props;
  const { mission_id, mission_name, description } = mission;
  const dispatch = useDispatch();

  const [success, setSuccess] = useState(false);

  const handleJoinMission = () => {
    dispatch(joinMission({ id: mission_id }));
    setSuccess(true);
  };

  return (
    <div className="mission-list">
      <h1>{mission_name}</h1>
      <p>{description}</p>
      <button type="button" onClick={handleJoinMission}>
        Join Mission
      </button>
      {success && (
        <p className="success-message">Successfully joined the mission! 🚀</p>
      )}
    </div>
  );
};

// Mission.propTypes = {
//   mission: PropTypes.shape({
//     mission_id: PropTypes.number.isRequired,
//     mission_name: PropTypes.string,
//     description: PropTypes.string,
//   }).isRequired,
// };

Mission.propTypes = {
  mission: PropTypes.shape({
    mission_id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    mission_name: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default Mission;

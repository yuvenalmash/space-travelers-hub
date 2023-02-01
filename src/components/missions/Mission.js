/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import './css/Mission.css';
import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
// import store from '../../redux/ConfigureStore';
import { joinMission, leaveMission } from '../../redux/missions/missionsSlice';

const Mission = (props) => {
  const { mission } = props;
  const { mission_id, mission_name, description } = mission;
  const dispatch = useDispatch();

  const [success, setSuccess] = useState(false);

  const handleJoinMission = () => {
    dispatch(joinMission({ id: mission_id }));
    // console.log(store.getState());
    setSuccess(true);
  };

  const handleLeaveMission = () => {
    dispatch(leaveMission({ id: mission_id }));
    // console.log(store.getState());
  };

  return (
    <tr>
      <td>{mission_name}</td>
      <td>{description}</td>
      <td>
        <p className="not__member">Not a member</p>
        <p className="active__member">Active member</p>
      </td>
      <td>
        <button
          className=" btn success__button"
          type="button"
          onClick={handleJoinMission}
        >
          Join Mission
        </button>
        {success && (
          <p className="success-message">Successfully joined the mission! 🚀</p>
        )}
        <button
          className="btn failure__button"
          type="button"
          onClick={handleLeaveMission}
        >
          Leave Mission
        </button>
      </td>
    </tr>
  );
};

Mission.propTypes = {
  mission: PropTypes.shape({
    mission_id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    mission_name: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default Mission;

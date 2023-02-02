/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import './css/Mission.css';
import { useDispatch } from 'react-redux';

import { joinMission, leaveMission } from '../../redux/missions/missionsSlice';

const Button = ({ isJoined, mission_id }) => {
  const dispatch = useDispatch();

  if (isJoined) {
    return (
      <button
        className="btn failure__button"
        type="button"
        onClick={() => dispatch(leaveMission(mission_id))}
      >
        Leave Mission
      </button>
    );
  }
  return (
    <button
      className=" btn success__button"
      type="button"
      onClick={() => dispatch(joinMission(mission_id))}
    >
      Join Mission
    </button>
  );
};
const Mission = (props) => {
  const { mission } = props;
  const {
    mission_id, mission_name, description, joined,
  } = mission;

  return (
    <tr>
      <td>{mission_name}</td>
      <td>{description}</td>
      <td>
        <p className="not__member">Not a member</p>
        <p className="active__member">Active member</p>
      </td>
      <td>
        <Button mission_id={mission_id} isJoined={joined} />
      </td>
    </tr>
  );
};

Mission.propTypes = {
  mission: PropTypes.shape({
    mission_id: PropTypes.string,
    mission_name: PropTypes.string,
    description: PropTypes.string,
    joined: PropTypes.bool,
  }).isRequired,
};
Button.propTypes = {
  isJoined: PropTypes.bool.isRequired,
  mission_id: PropTypes.string.isRequired,
};

export default Mission;

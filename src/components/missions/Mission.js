import PropTypes from 'prop-types';
import './css/Mission.css';
import { useDispatch } from 'react-redux';

import { joinMission, leaveMission } from '../../redux/missions/missionsSlice';

const Button = ({ isJoined, missionId }) => {
  const dispatch = useDispatch();

  if (isJoined) {
    return (
      <button
        className="btn failure__button"
        type="button"
        onClick={() => dispatch(leaveMission(missionId))}
      >
        Leave Mission
      </button>
    );
  }
  return (
    <button
      className=" btn success__button"
      type="button"
      onClick={() => dispatch(joinMission(missionId))}
    >
      Join Mission
    </button>
  );
};
const Mission = (props) => {
  const { mission } = props;

  return (
    <tr>
      <td>{mission.mission_name}</td>
      <td>{mission.description}</td>
      <td>
        {!mission.joined && <p className="not__member">Not a member</p>}
        {mission.joined && <p className="active__member">Active member</p>}
      </td>
      <td>
        <Button missionId={mission.mission_id} isJoined={mission.joined} />
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
  missionId: PropTypes.string.isRequired,
};

export default Mission;

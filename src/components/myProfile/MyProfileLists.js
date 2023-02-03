import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectAllRockets } from '../../redux/rockets/rocketsSlice';
import { selectAllMissions } from '../../redux/missions/missionsSlice';
import './MyProfileLists.css';

const RocketItem = ({ rocketName }) => <li>{rocketName}</li>;
RocketItem.propTypes = {
  rocketName: PropTypes.string.isRequired,
};

const MissionItem = ({ missionName }) => <li>{missionName}</li>;
MissionItem.propTypes = {
  missionName: PropTypes.string.isRequired,
};

const MyProfileLists = () => {
  const rockets = useSelector(selectAllRockets);
  const missions = useSelector(selectAllMissions);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved === true);
  const joinedMissions = missions.filter((mission) => mission.joined === true);
  return (
    <>
      <div
        style={{
          display: 'flex',

          gap: '24px',
        }}
      >
        <section style={{ flex: 1 }}>
          <h2>My Missions</h2>
          <ul className="myprofile__list">
            {joinedMissions.map((mission) => (
              <MissionItem
                key={mission.mission_id}
                missionName={mission.mission_name}
              />
            ))}
          </ul>
        </section>
        <section style={{ flex: 1 }}>
          <h2>My Rockets</h2>
          <ul className="myprofile__list">
            {reservedRockets.map((rocket) => (
              <RocketItem key={rocket.id} rocketName={rocket.name} />
            ))}
          </ul>
        </section>
      </div>
    </>
  );
};

export default MyProfileLists;

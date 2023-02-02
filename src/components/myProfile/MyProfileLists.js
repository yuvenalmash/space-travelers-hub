/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';
import { selectAllRockets } from '../../redux/rockets/rocketsSlice';
import { selectAllMissions } from '../../redux/missions/missionsSlice';

const RocketItem = ({ rocketName }) => <li>{rocketName}</li>;

const MissionItem = ({ missionName }) => <li>{missionName}</li>;

const MyProfileLists = () => {
  const rockets = useSelector(selectAllRockets);
  const missions = useSelector(selectAllMissions);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved === true);
  const joinedMissions = missions.filter((mission) => mission.joined === true);
  return (
    <>
      <section>
        <h2>My Missions</h2>
        <ul>
          {joinedMissions.map((mission) => (
            <MissionItem
              key={mission.mission_id}
              missionName={mission.mission_name}
            />
          ))}
        </ul>
      </section>
      <section>
        <h2>My Rockets</h2>
        <ul>
          {reservedRockets.map((rocket) => (
            <RocketItem key={rocket.id} rocketName={rocket.name} />
          ))}
        </ul>
      </section>
    </>
  );
};

export default MyProfileLists;

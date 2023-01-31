import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Mission from './Mission';
import {
  fetchMissions,
  selectAllMissions,
  selectState,
} from '../../redux/missions/missionsSlice';

const MissionsList = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectState);
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchMissions());
    }
  }, [dispatch, status]);

  const missions = useSelector(selectAllMissions);

  return (
    <ul>
      {missions.map((mission) => (
        <Mission key={mission.id} mission={mission} />
      ))}
    </ul>
  );
};

export default MissionsList;

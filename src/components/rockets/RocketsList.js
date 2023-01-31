import Rocket from './Rocket';

const RocketsList = () => {
  const rockets = [];
  return (
    <ul>
      {rockets.map((rocket) => {
        console.log('rocket');
        return (
          <Rocket
            key={rocket.id}
            rocket={rocket}
          />
        );
      })}
    </ul>
  );
};

export default RocketsList;

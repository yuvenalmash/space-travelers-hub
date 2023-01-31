import PropTypes from 'prop-types';

const Mission = (props) => {
  const { mission } = props;
  const { name, description } = mission;

  return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
      <button type="button"> Join Mission</button>
    </div>
  );
};

Mission.propTypes = {
  mission: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default Mission;

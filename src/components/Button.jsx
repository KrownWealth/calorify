
import PropTypes from 'prop-types';

const CalcButton = ({ selectedActivity, onDisplayOption }) => {
  return (
    <button onClick={() => onDisplayOption(selectedActivity)}>
      Calculate
    </button>
  );
};

CalcButton.propTypes = {
  selectedActivity: PropTypes.string.isRequired,
  onDisplayOption: PropTypes.func.isRequired,
};

export default CalcButton;

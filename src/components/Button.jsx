import PropTypes from "prop-types";

const CalcButton = ({ selectedActivity, onDisplayOption }) => {
  return (
    <>
      <button onClick={() => onDisplayOption(selectedActivity)}>
        Calculate
      </button>
      <p>
        This calculator is for informational purposes only. It&apos;s not advice
        for professional medical advice.
      </p>
    </>
  );
};

CalcButton.propTypes = {
  selectedActivity: PropTypes.string.isRequired,
  onDisplayOption: PropTypes.func.isRequired,
};

export default CalcButton;

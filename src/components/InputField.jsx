import PropTypes from 'prop-types';


const InputField = ({ 
  activities,
  selectedActivity,
  onSelect,
  userInputs,
  handleInputChange,
}) => {
  const handleActivityChange = (e) => {
    e.preventDefault();
    const selectedValue = e.target.value;
    onSelect(selectedValue); 
  };

  return (
    <div className="input-container">
      <div className="input-grid">
        <label htmlFor="Activity">Activity</label>
        <div className="custom-input-container">
          <select
            name="selectanactivity"
            value={selectedActivity}
            className="custom-input"
            onChange={handleActivityChange}
          >
            <option value="">Select an activity</option>
            {activities.map((act, index) => (
              <option key={act.substring(0, 15) + index} value={act}>
                {act}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="input-grid">
        <label htmlFor="Weight">Weight</label>
        <div className="custom-input-container">
          <input
          type="number" 
          name="weight" 
          value={userInputs.weight || ""} 
            className="custom-input"
            onChange={handleInputChange}
          />
          <div className="placeholder-text">kilograms</div>
        </div>
        
        {/* <div className="error-container">
          {inputErrors && <div className="error-message">{inputErrors}</div>}
        </div> */}
      </div>
      <div className="input-grid">
        <label htmlFor="ActivityDuration">Activity Duration</label>
        <div className="custom-input-container">
          <input
            type="number"
            name="duration"
            className="custom-input"
            value={userInputs.duration || ""}
            onChange={handleInputChange}
          />
          <div className="placeholder-text">minutes</div>
        </div>
        {/* <div className="error-container">
          {inputErrors && <div className="error-message">{inputErrors}</div>}
        </div> */}
      </div>
    </div>
  );
};

InputField.propTypes = {
  activities: PropTypes.array.isRequired,
  selectedActivity: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  userInputs: PropTypes.object.isRequired, 
};

export default InputField;

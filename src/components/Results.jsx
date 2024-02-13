import PropTypes from "prop-types";

const Results = ({ caloriesBurned }) => {
  console.log(caloriesBurned);

  return (
    <div className="result">
      <h2>Calories Burned</h2>
      <div className="display-calorie">
        <p>
          {caloriesBurned !== null
            ? `${Math.round(caloriesBurned)} calories burned`
            : "Calories burned not available"}
        </p>
      </div>
    </div>
  );
};
Results.propTypes = {
  caloriesBurned: PropTypes.number.isRequired,
};

export default Results;

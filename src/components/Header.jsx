import { FaCalculator } from "react-icons/fa";

export const Header = () => {
  return (
    <header>
      <div className="header">
        <div>
          <h2>The Calorify</h2>
          <p className="header-text">
            The Calorify is a Calories Burned Calculator that helps you estimate
            how many <br /> calories you burn when completing a specific
            activity for a set period of time.
          </p>
        </div>
        <div className="calc-icon">
          <FaCalculator className="icon" />
        </div>
      </div>
    </header>
  );
};

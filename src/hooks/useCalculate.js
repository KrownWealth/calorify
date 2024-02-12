import { useState } from "react";

export const useCalculate = () => {
  const [error, setError] = useState(null);
  const [caloriesPerHour, setCaloriesPerHour] = useState(0);
  const [durationMinutes, setDurationMinutes] = useState(0);
  const [mets, setMETs] = useState(0);
  const [caloriesBurned, setCaloriesBurned] = useState(0);

  
  // In useCalculate hook
// const apiKey = import.meta.env.API_NINJAS_KEY;
const apiKey = 'aQbPeSrBCai6qcFSQ2VZ30PlZJMryiHFGVIRFm9z'

  const handleCalculate = async (selectedActivity, userInputs) => {
    try {
      const { weight, duration } = userInputs;
      console.log(selectedActivity, weight, duration);
      const response = await fetch(
        `https://api.api-ninjas.com/v1/caloriesburned?activity=${encodeURIComponent(
          selectedActivity
        )}`,
        {
          headers: {
            "X-Api-Key": apiKey,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch activity data");
      }
      const activityData = await response.json();

      if (activityData.length > 0) {
        const { calories_per_hour, duration_minutes } = activityData[0];
        setCaloriesPerHour(calories_per_hour);
        console.log(calories_per_hour);
        setDurationMinutes(duration_minutes);
        console.log(duration_minutes);
        setError(null);

        // const weightPoundsToKg = weight / 2.205;
        const METsPerMinutes =
          caloriesPerHour / durationMinutes;
        setMETs( METsPerMinutes);
        const calculatedCaloriesBurned = ( duration *  METsPerMinutes * weight ) / 200
        setCaloriesBurned(calculatedCaloriesBurned);
        console.log(calculatedCaloriesBurned);
      } else {
        setError("No data found for the selected activity");
      }
    } catch (error) {
      setError("Error fetching activity data");
      console.error("Error fetching activity data:", error);
    }
  };

  return {
    error,
    mets,
    caloriesBurned,
    handleCalculate,
  };
};

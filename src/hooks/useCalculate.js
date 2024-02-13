import { useState } from 'react';

export const useCalculate = () => {
  const [errors, setErrors] = useState({});
  const [caloriesPerHour, setCaloriesPerHour] = useState(0);
  const [durationMinutes, setDurationMinutes] = useState(0);
  const [mets, setMETs] = useState(0);
  const [caloriesBurned, setCaloriesBurned] = useState(null);

  const apiKey = 'aQbPeSrBCai6qcFSQ2VZ30PlZJMryiHFGVIRFm9z';

  const handleCalculate = async (selectedActivity, userInputs) => {
    try {
      const { weight, duration } = userInputs;
      setErrors({}); 

      // Validate weight
      if (!selectedActivity){
        setErrors(prevErrors => ({
          ...prevErrors,
          activity: 'Please select an Activity'
        }));
        return;
      }
      if (weight < 50 || weight > 600) {
        setErrors(prevErrors => ({
          ...prevErrors,
          weight: 'Weight should be between 50 and 600.'
        }));
        return;
      }

      // Validate duration
      if (duration < 5 || duration > 60) {
        setErrors(prevErrors => ({
          ...prevErrors,
          duration: 'Duration should be between 5 and 60.'
        }));
        return;
      }

      const response = await fetch(
        `https://api.api-ninjas.com/v1/caloriesburned?activity=${encodeURIComponent(selectedActivity)}`,
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
        setDurationMinutes(duration_minutes);

        const METsPerMinutes = calories_per_hour / duration_minutes;
        setMETs(METsPerMinutes);

        const calculatedCaloriesBurned = (duration * METsPerMinutes * weight) / 200;
        setCaloriesBurned(calculatedCaloriesBurned);
      } else {
        setErrors({ activity: 'No data found for the selected activity' });
      }
    } catch (error) {
      setErrors({ activity: 'Error fetching activity data' });
      console.error("Error fetching activity data:", error);
    }
  };

  return {
    errors,
    mets,
    caloriesBurned,
    handleCalculate,
  };
};

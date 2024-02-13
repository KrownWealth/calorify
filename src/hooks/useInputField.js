import { useState, useEffect } from "react";

// const apiKey = import.meta.env.API_NINJAS_KEY;
const apiKey = "aQbPeSrBCai6qcFSQ2VZ30PlZJMryiHFGVIRFm9z";

export const useInputField = () => {
  const [activities, setActivities] = useState([]);

  const fetchActivities = () => {
    fetch("https://api.api-ninjas.com/v1/caloriesburnedactivities", {
      headers: {
        "X-Api-Key": apiKey,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data.activities)) {
          setActivities(data.activities);
        } else {
          console.error("Error: Fetched data.activities is not an array");
        }
      })
      .catch((error) => console.error("Error fetching activities:", error));
  };

  useEffect(() => {
    fetchActivities();
  }, []);

  return {
    activities,
  };
};

import { useState } from 'react'
import InputField from './InputField'
import CalcButton from './Button'
import Results from './Results'
import { useCalculate } from '../hooks/useCalculate'
import { useInputField } from '../hooks/useInputField'

export const Content = () => {
  const { activities } = useInputField()
  const [selectedActivity, setSelectedActivity] = useState('')
  const [userInputs, setUserInputs] = useState({})
  const {
    errors,
    caloriesBurned,
    calculatedCaloriesBurned,
    handleCalculate,
  } = useCalculate()

  const handleSelect = (selectedValue) => {
    setSelectedActivity(selectedValue)
  }

  const handleInputChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setUserInputs((values) => ({ ...values, [name]: value }))
  }

  const onDisplayOption = () => {
    handleCalculate(selectedActivity, userInputs)
  }

  return (
    <main className="">
      <div className="main-content">
        <InputField
          activities={activities}
          selectedActivity={selectedActivity}
          onSelect={handleSelect}
          setUserInputs={setUserInputs}
          userInputs={userInputs}
          handleInputChange={handleInputChange}
          errors={errors}
        />
        <CalcButton
          selectedActivity={selectedActivity}
          onDisplayOption={onDisplayOption}
        />
        <Results
          errors={errors}
          caloriesBurned={caloriesBurned}
          calculatedCaloriesBurned={calculatedCaloriesBurned}
        />
      </div>
    </main>
  )
}

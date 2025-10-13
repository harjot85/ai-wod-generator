"use client";
import Button from "@mui/material/Button";
import Equipment from "../components/equipment/equipment";
import Preferences from "../components/preferences/preferences";
import Stats from "../components/stats/stats";
import { useState } from "react";

export default function GenerateWOD() {
  const [age, setAge] = useState(0);
  const [weight, setWeight] = useState(0);
  const [gender, setGender] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("");
  const [equipment, setEquipment] = useState("");
  const [preferences, setPreferences] = useState("");

  const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAge(parseInt(event.target.value));
  };
  const handleWeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWeight(parseInt(event.target.value));
  };
  const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGender(event.target.value);
  };
  const handleExperienceLevelChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setExperienceLevel(event.target.value);
  };

  const handleEquipmentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEquipment(event.target.value);
  };
  const handlePreferencesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPreferences(event.target.value);
  };

  const finalPrompt = () => {
    console.log("finalPrompt", age, weight, gender, experienceLevel, equipment, preferences);
  };

  return (
    <>
      <Stats
        handleAgeChange={handleAgeChange}
        handleWeightChange={handleWeightChange}
        handleGenderChange={handleGenderChange}
        handleExperienceLevelChange={handleExperienceLevelChange}
      />
      <Equipment handleEquipmentChange={handleEquipmentChange} />
      <Preferences handlePreferencesChange={handlePreferencesChange} />

      <div>
        <Button variant="contained" color="success" onClick={finalPrompt}>Generate</Button>
      </div>
    </>
  );
}

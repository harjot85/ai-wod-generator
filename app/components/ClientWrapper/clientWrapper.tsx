"use client";
import Button from "@mui/material/Button";
import Equipment from "../equipment/equipment";
import Preferences from "../preferences/preferences";
import Stats from "../stats/stats";
import { useEffect, useState } from "react";
import { EquipmentType } from "../equipment/types";

function ClientWrapper() {
  const [age, setAge] = useState(0);
  const [weight, setWeight] = useState(0);
  const [gender, setGender] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("");
  const [equipmentSelected, setEquipmentSelected] = useState("");
  const [equipment, setEquipment] = useState<EquipmentType[]>([]);
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

  const handleEquipmentChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEquipmentSelected(event.target.value);
  };
  const handlePreferencesChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPreferences(event.target.value);
  };

  const finalPrompt = () => {
    console.log(
      "finalPrompt",
      age,
      weight,
      gender,
      experienceLevel,
      equipmentSelected,
      preferences
    );
  };

  const getEquipment = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL || ""}/api/equipment`
    );
    const equipment = await response.json();
    console.log("E:", equipment);
    return equipment;
  };
  useEffect(() => {
    const fetchEquipment = async () => {
      const equipment = await getEquipment();
      setEquipment(equipment);
    };
    fetchEquipment();
  }, []);

  return (
    <>
      <Stats
        handleAgeChange={handleAgeChange}
        handleWeightChange={handleWeightChange}
        handleGenderChange={handleGenderChange}
        handleExperienceLevelChange={handleExperienceLevelChange}
      />
      <Equipment
        equipment={equipment}
        handleEquipmentChange={handleEquipmentChange}
      />
      <Preferences handlePreferencesChange={handlePreferencesChange} />

      <div>
        <Button variant="contained" color="success" onClick={finalPrompt}>
          Generate
        </Button>
      </div>
    </>
  );
}
export default ClientWrapper;

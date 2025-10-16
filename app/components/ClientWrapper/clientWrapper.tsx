"use client";
import Equipment from "../equipment/equipment";
import Preferences from "../preferences/preferences";
import Stats from "../stats/stats";
import { useEffect, useState, useTransition } from "react";
import { EquipmentType } from "../equipment/types";

function ClientWrapper() {
  const [age, setAge] = useState(0);
  const [weight, setWeight] = useState(0);
  const [gender, setGender] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("");
  const [equipmentSelected, setEquipmentSelected] = useState("");
  const [equipment, setEquipment] = useState<EquipmentType[]>([]);
  const [preferences, setPreferences] = useState("");

  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [isPending, startTransition] = useTransition();

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

  const finalPrompt = async () => {
    // Build your input into one prompt string
    const prompt = `
      Age: ${age}
      Weight: ${weight}
      Gender: ${gender}
      Experience Level: ${experienceLevel}
      Equipment: ${equipmentSelected}
      Preferences: ${preferences}
      Create a personalized workout plan based on these details.
    `;

    setIsLoading(true);
    setResult("");

    const response = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ goal: prompt }),
    });

    if (!response.body) {
      setResult("No response received.");
      setIsLoading(false);
      return;
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();

    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      const chunkText = decoder.decode(value);
      startTransition(() => {
        setResult((prev) => prev + chunkText);
      });

      await new Promise((resolve) => setTimeout(resolve, 0));
    }

    setIsLoading(false);
  };

  const getEquipment = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL || ""}/api/equipment`
    );
    const equipment = await response.json();

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
      <h1>Generate Your Workout</h1>
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
        <button 
          style={{ 
            backgroundColor: '#4caf50', 
            color: 'white', 
            padding: '10px 20px', 
            border: 'none', 
            borderRadius: '4px',
            cursor: 'pointer',
            marginRight: '10px'
          }} 
          onClick={finalPrompt}
        >
          Generate
        </button>
        <button
          style={{ 
            backgroundColor: 'transparent', 
            color: '#2196f3', 
            padding: '10px 20px', 
            border: '1px solid #2196f3', 
            borderRadius: '4px',
            cursor: 'pointer'
          }}
          onClick={() => setResult("")}
        >
          Clear
        </button>
      </div>
      <div style={{ marginTop: "20px", whiteSpace: "pre-wrap" }}>
        {isLoading ? "Generating..." : result || "Your plan will appear here"}
      </div>
    </>
  );
}
export default ClientWrapper;

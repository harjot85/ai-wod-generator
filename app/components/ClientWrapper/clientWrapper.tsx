"use client";
import Equipment from "../equipment/equipment";
import Preferences from "../preferences/preferences";
import Stats from "../stats/stats";
import { useState, useTransition } from "react";
import { EquipmentType } from "../equipment/types";

function ClientWrapper() {
  const [age, setAge] = useState(0);
  const [weight, setWeight] = useState(0);
  const [gender, setGender] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("");
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

  const handlePreferencesChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setPreferences(event.target.value);
  };

  const handleEquipmentChange = (updatedList: EquipmentType[]) => {
    setEquipment(updatedList);
  };

  const finalPrompt = async () => {
    // Build your input into one prompt string

    const prompt = `
      Age: ${age}
      Weight: ${weight}
      Gender: ${gender}
      Experience Level: ${experienceLevel}
      Equipment: ${equipment.map((e) => e.name)}
      Preferences: ${preferences}
      Create a personalized workout plan based on these details.
    `;

    console.log("Prompt: ", prompt);

    setIsLoading(true);
    setResult("");

    //const response = await fetch("/api/generate", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ goal: prompt }),
    // });

    // Fake minimal response for testing
    const response = {
      body: {
        getReader() {
          let done = false;
          return {
            async read() {
              if (done) return { value: undefined, done: true };
              done = true;
              return {
                value: new TextEncoder().encode(
                  "Here is your personalized workout plan!"
                ),
                done: false,
              };
            },
          };
        },
      },
    };

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

  return (
    <div className="flex flex-col gap-4 w-300">
      <div className="flex justify-center w-full">
        <h1 className="text-2xl font-bold">Generate Your Workout</h1>
      </div>
      <div className="divider w-full" />
      <Stats
        handleAgeChange={handleAgeChange}
        handleWeightChange={handleWeightChange}
        handleGenderChange={handleGenderChange}
        handleExperienceLevelChange={handleExperienceLevelChange}
      />
      <div className="divider" />
      <Equipment
        equipment={equipment}
        onEquipmentChange={handleEquipmentChange}
      />
      <div className="divider" />
      <Preferences handlePreferencesChange={handlePreferencesChange} />
      <div className="divider" />
      <div className="flex gap-7 justify-center">
        <button className="btn btn-primary w-100 " onClick={finalPrompt}>
          Generate with AI
        </button>
        <button
          className="btn btn-outline glass w-30"
          onClick={() => setResult("")}
        >
          Clear
        </button>
      </div>
      <div style={{ marginTop: "20px", whiteSpace: "pre-wrap" }}>
        {isLoading ? "Generating..." : result || "Your plan will appear here"}
      </div>
    </div>
  );
}
export default ClientWrapper;

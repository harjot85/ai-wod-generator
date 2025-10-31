"use client";

import { useRef } from "react";

export default function Stats({
  handleAgeChange,
  handleWeightChange,
  handleHeightChange,
  handleOtherGenderChange,
  handleGenderSelect,
  handleExperienceLevelChange,
  selectedGender,
  selectedExperienceLevel
}: {
  handleAgeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleWeightChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleHeightChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleOtherGenderChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleGenderSelect: (gender: string) => void;
  handleExperienceLevelChange: (experienceLevel: string) => void;
  selectedGender?: string;
  selectedExperienceLevel?: string;
}) {
  const otherGenderRef = useRef<HTMLInputElement>(null);

  const handleGenderClick = (gender: string) => {
    handleGenderSelect(gender);
    if (otherGenderRef.current) {
      otherGenderRef.current.value = "";
    }
  };

  const handleExperienceChange = (experienceLevel: string) => {
    handleExperienceLevelChange(experienceLevel);
  };

  return (
    <div className="flex flex-col  gap-2">
      <label className="font-medium mb-2" htmlFor="preferences">
        Your Stats
      </label>
      <label htmlFor="age">Your Age</label>
      <input
        type="number"
        className="input input-bordered"
        onChange={handleAgeChange}
      />
      <label htmlFor="weight">Your Weight</label>
      <input
        type="number"
        className="input input-bordered"
        onChange={handleWeightChange}
      />
      <label htmlFor="weight">Your Height</label>
      <input
        type="text"
        className="input input-bordered"
        onChange={handleHeightChange}
      />
      <label htmlFor="gender">Your Gender</label>
      <div className="flex flex-row">
        <button
          className={`basis-36 btn ${
            selectedGender === "male" ? "" : "btn-outline"
          } btn-success mr-4`}
          onClick={() => handleGenderClick("male")}
        >
          Male
        </button>
        <button
          className={`basis-36 btn ${
            selectedGender === "female" ? "" : "btn-outline"
          } btn-success mr-4`}
          onClick={() => handleGenderClick("female")}
        >
          Female
        </button>

        <label className="mx-4 flex items-center">Other</label>
        <input
          ref={otherGenderRef}
          type="text"
          className="input input-bordered"
          onChange={handleOtherGenderChange}
        />
      </div>
      <label htmlFor="experienceLevel">Your Experience Level</label>
      <div className="flex flex-row">
        <button
          className={`basis-36 btn ${
            selectedExperienceLevel === "beginner" ? "" : "btn-outline"
          } btn-success mr-4`}
          onClick={() => handleExperienceChange("beginner")}
        >
          Beginner
        </button>
        <button
          className={`basis-36 btn ${
            selectedExperienceLevel === "intermediate" ? "" : "btn-outline"
          } btn-success mr-4`}
          onClick={() => handleExperienceChange("intermediate")}
        >
          Intermediate
        </button>
        <button
          className={`basis-36 btn ${
            selectedExperienceLevel === "advanced" ? "" : "btn-outline"
          } btn-success mr-4`}
          onClick={() => handleExperienceChange("advanced")}
        >
          Advanced
        </button>
      </div>
    </div>
  );
}

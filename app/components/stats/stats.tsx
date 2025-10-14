"use client";
export default function Stats({
  handleAgeChange,
  handleWeightChange,
  handleGenderChange,
  handleExperienceLevelChange,
}: {
  handleAgeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleWeightChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleGenderChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleExperienceLevelChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
}) {
  return (
    <div className="flex flex-row gap-2">
      Your Age: <input type="number" onChange={handleAgeChange} />
      Your Weight: <input type="number" onChange={handleWeightChange} />
      Your Gender: <input type="text" onChange={handleGenderChange} />
      Your Experience Level:{" "}
      <input type="text" onChange={handleExperienceLevelChange} />
    </div>
  );
}

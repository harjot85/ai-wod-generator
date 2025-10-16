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
    <div className="flex flex-col  gap-2">
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
      <label htmlFor="gender">Your Gender</label>
      <input
        type="text"
        className="input input-bordered"
        onChange={handleGenderChange}
      />
      <label htmlFor="experienceLevel">Your Experience Level</label>
      <input
        type="text"
        className="input input-bordered"
        onChange={handleExperienceLevelChange}
      />
    </div>
  );
}

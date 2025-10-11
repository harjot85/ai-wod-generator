"use client";
export default function Preferences({
  handlePreferencesChange,
}: {
  handlePreferencesChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div>
      Preferences: <input type="text" onChange={handlePreferencesChange} />
    </div>
  );
}

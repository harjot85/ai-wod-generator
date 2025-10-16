"use client";
export default function Preferences({
  handlePreferencesChange,
}: {
  handlePreferencesChange: (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-medium mb-2" htmlFor="preferences">
        Your Goal and Preferences
      </label>
      <textarea
        className="textarea textarea-bordered h-48"
        onChange={handlePreferencesChange}
      />
    </div>
  );
}

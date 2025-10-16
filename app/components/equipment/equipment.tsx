"use client";

import { useState } from "react";
import { EquipmentType } from "./types"; // adjust path if needed

const equipmentList: EquipmentType[] = [
  {
    id: 1,
    name: "Dumbbell",
    image:
      "https://cdn.pixabay.com/photo/2020/04/07/16/05/fitness-5013986_1280.jpg",
  },
  {
    id: 2,
    name: "Barbell",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070",
  },
  {
    id: 3,
    name: "Kettlebell",
    image:
      "https://images.unsplash.com/photo-1562771242-7d077824055a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070",
  },
];

const Equipment = ({
  equipment,
  onEquipmentChange,
}: {
  equipment: EquipmentType[];
  onEquipmentChange: (items: EquipmentType[]) => void;
}) => {
  const [customName, setCustomName] = useState("");

  const toggleEquipment = (item: EquipmentType) => {
    const exists = equipment.some((eq) => eq.id === item.id);

    const updatedList = exists
      ? equipment.filter((eq) => eq.id !== item.id)
      : [...equipment, item];

    onEquipmentChange(updatedList);
  };

  const addCustomEquipment = () => {
    const trimmedName = customName.trim();
    if (!trimmedName) return;

    const newItem: EquipmentType = {
      id: Date.now(), // temporary unique id
      name: trimmedName,
    };

    onEquipmentChange([...equipment, newItem]);
    setCustomName("");
  };

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Select Your Equipment</h3>

      {/* Built-in equipment list */}
      <div className="flex flex-wrap gap-4">
        {equipmentList.map((item) => (
          <EquipmentCard
            key={item.id}
            equipment={item}
            checked={equipment.some((eq) => eq.id === item.id)}
            onToggle={toggleEquipment}
          />
        ))}
      </div>

      {/* Add custom equipment */}
      <div className="mt-4">
        <h4 className="font-medium mb-2">Add Custom Equipment</h4>
        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Equipment name"
            value={customName}
            onChange={(e) => setCustomName(e.target.value)}
            className="input input-bordered w-64"
          />

          <button className="btn btn-primary" onClick={addCustomEquipment}>
            Add
          </button>
          <div> {customName}</div>
        </div>
      </div>
    </div>
  );
};

const EquipmentCard = ({
  equipment,
  checked,
  onToggle,
}: {
  equipment: EquipmentType;
  checked: boolean;
  onToggle: (equipment: EquipmentType) => void;
}) => {
  return (
    <div className="card bg-base-100 w-60 shadow-sm">
      <figure className="px-4 pt-4">
        <img
          src={equipment.image}
          alt={equipment.name}
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{equipment.name}</h2>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => onToggle(equipment)}
          className="toggle border-gray-600 bg-gray-500 checked:border-green-500 checked:bg-green-400"
        />
      </div>
    </div>
  );
};

export default Equipment;

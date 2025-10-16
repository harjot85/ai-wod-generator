"use client";

import { EquipmentType } from "./types";

const equipmentList = [
  {
    id: 1,
    name: "Dumbbell",
    image:
      "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
  },
  {
    id: 2,
    name: "Barbell",
    image:
      "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
  },
  {
    id: 3,
    name: "Kettlebell",
    image:
      "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
  },
];
const Equipment = ({
  //equipment,
  handleEquipmentChange,
}: {
  equipment: EquipmentType[];
  handleEquipmentChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  //const equipmentList = equipment.map((item) => item.name).join(", ");
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="equipment">Equipment</label>
      <div className="flex flex-row gap-2">
        {equipmentList.map((equipment) => (
          <EquipmentCard key={equipment.id} equipment={equipment} />
        ))}
      </div>
      <label htmlFor="otherEquipment">Other Equipment (comma separated)</label>
      <input
        type="text"
        className="input input-bordered"
        onChange={handleEquipmentChange}
      />
    </div>
  );
};

const EquipmentCard = ({ equipment }: { equipment: EquipmentType }) => {
  return (
    <div className="card bg-base-100 w-60 shadow-sm">
      <figure className="px-4 pt-4">
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{equipment.name}</h2>
      </div>
    </div>
  );
};

export default Equipment;

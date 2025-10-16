"use client";

import { EquipmentType } from "./types";

const equipmentList = [
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
          src={equipment.image}
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

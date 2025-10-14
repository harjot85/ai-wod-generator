"use client";

import EquipmentInput from "./equipmentInput";
import { EquipmentType } from "./types";

const Equipment = ({
  equipment,
  handleEquipmentChange,
}: {
  equipment: EquipmentType[];
  handleEquipmentChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div>
      Equipment (such as {equipment.map((item) => item.name).join(", ")}
      ):
      <EquipmentInput handleEquipmentChange={handleEquipmentChange} />
    </div>
  );
};

export default Equipment;

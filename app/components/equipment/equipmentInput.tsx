"use client";

const EquipmentInput = ({
  handleEquipmentChange,
}: {
  handleEquipmentChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return <input type="text" onChange={handleEquipmentChange} />;
};

export default EquipmentInput;

export default function Equipment({ handleEquipmentChange }: { handleEquipmentChange: (event: React.ChangeEvent<HTMLInputElement>) => void }) {
  return <div>
    Equipment: <input type="text" onChange={handleEquipmentChange} />
  </div>;
}

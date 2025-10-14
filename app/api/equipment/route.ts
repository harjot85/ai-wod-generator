import { NextResponse } from "next/server";

// const equipment = [
//   { id: 1, name: "Barbell" },
//   { id: 2, name: "Dumbbell" },
//   { id: 3, name: "Kettlebell" },
// ];

// In Cursor IDE, the shortcut to comment code is: 
// Windows/Linux: Ctrl + / 

export async function GET() {
  //return NextResponse.json(equipment);
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return NextResponse.json(data);
}

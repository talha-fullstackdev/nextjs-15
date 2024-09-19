// export async function GET(request) {
//     return new Response("This is api routes")

// }
import { NextResponse } from "next/server";
const myData = { name: "Talha Nawaz", age: 23, gender: "Male" };
export const GET = (request) => {
  return NextResponse.json(myData);
};

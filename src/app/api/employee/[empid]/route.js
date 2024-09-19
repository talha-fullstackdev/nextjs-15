import { employees } from "@/db/db";
import { NextResponse } from "next/server";
export const GET = (req, value) => {
  const empData = employees.filter((item) => item.id == value.params.empid);
  let result =
    empData.length == 0 ? { result: "No employee found" } : { result: empData };
  // const data = employees
  return NextResponse.json(result);
};

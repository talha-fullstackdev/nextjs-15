import { employees } from "@/db/db";
import { NextResponse } from "next/server";
export const GET=()=>{
    const data = employees
    return NextResponse.json(data,{status:200})
}
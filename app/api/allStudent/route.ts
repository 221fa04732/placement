import prisma from "@/app/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(){
    
    try{
        const data = await prisma.student.findMany({});

        return NextResponse.json({
            data,
            message : "Fetching Student Detail Sucessful!"
        })
    }
    catch(e){
        return NextResponse.json({
            message : "Internal Server Error"
        })
    }
}
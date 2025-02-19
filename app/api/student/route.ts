
import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from "next/server";
import Papa from "papaparse";


interface student {
  name    :   string
  regNo   :   string
  batch   :   string
  company   : string
  package  :  string
  branch  :   string
  placedDate : string
}

export async function POST(req: NextRequest) {

    const prisma = new PrismaClient();

    const formData = await req.formData();
    const file = formData.get("file") as File; // CSV File

    const text = await file.text();

    // Parse CSV using PapaParse
    const { data, errors } = Papa.parse<student>(text, { header: true });

    console.log(data)

    const validData : student[] = data.filter(student => student.name && student.regNo && student.batch && student.company && student.package && student.branch && student.placedDate);


    console.log(validData)

  try{
    const user = await prisma.student.createMany({
        data : validData,
        skipDuplicates : true
    })

    console.log(user)
  }

  catch(e){
    console.log("error aa raha hai")
  }
        
    

    return NextResponse.json({
        msg : "done"
    })
}


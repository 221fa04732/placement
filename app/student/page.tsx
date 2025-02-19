import { PrismaClient } from "@prisma/client";

export default async function(){

    interface student {
        name    :   string
        regNo   :   string
        batch   :   string
        company   : string
        package  :  string
        branch  :   string
        placedDate : string
    }

    const prisma = new PrismaClient();

    const students = await prisma.student.findMany({});

    return(<div className="flex flex-col justify-center items-center">

        <div className="m-5">Student Info</div>

        {students.map((student: student )=>(
            <div className="flex w-full justify-between">
                <div>{student.name}</div>
                <div>{student.company}</div>
                <div>{student.package}</div>
            </div>
            
        ))}
    </div>)
    

}
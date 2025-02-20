"use server"

import prisma from "../db";
import Button from "../component/Button";

interface student {
    id      : string
    name    :   string
    regNo   :   string
    batch   :   string
    company   : string
    package  :  string
    branch  :   string
    placedDate : string
}

export default async function(){

    const data : student[] = await prisma.student.findMany();

    return(<div className="flex flex-col justify-center items-center">

        <div className="m-5">Student Info</div>

        {data.map((student: student )=>(
            <div key={student.id} className="flex w-full justify-between p-1">
                <div>{student.name}</div>
                <div>{student.regNo}</div>
                <div>{student.batch}</div>
                <div>{student.company}</div>
                <div>{student.package}</div>
                <div>{student.branch}</div>
                <div>{student.placedDate}</div>
                <Button id={student.id}></Button>
            </div>
            
        ))}
    </div>)
    
}
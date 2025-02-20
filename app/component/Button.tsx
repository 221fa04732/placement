"use client"

import axios from 'axios'

export default function Button(props : {
    id : string
}){

    const id : string =props.id;
    return (<button onClick={()=>{
        deleteStudent(id);
    }}>Delete</button>)
}

async function deleteStudent(id : string) {
    try{
        const user = await axios.put('http://localhost:3000/api/deleteStudent',{
            id : id
        })
        if(user){
            console.log(user)
        }
    }
    catch(error){
        console.log(error)
    }
}
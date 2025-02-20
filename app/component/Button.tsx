"use client"

import axios from 'axios'

export default function Button(props : {
    id : string
}){

    async function deleteStudent() {
        
        const id = props.id;
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

    return (<button onClick={()=>{
        deleteStudent()
    }}>Delete</button>)
}
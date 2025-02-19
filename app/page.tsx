"use client"

import { useState } from "react";
import axios from "axios"


export default function Home() {

  const [studentData, setStudentData] = useState<File | null>(null)

  async function fetchStudentData(){

    try{
      if(studentData){

        const formdata = new FormData();
        formdata.append("file", studentData);

        console.log(formdata)
        const response =await axios.post("http://localhost:3000/api/student",formdata, {
          headers: {
            "Content-Type": "multipart/form-data",
        }})

        console.log(response.data)
      }
      else{
        console.log("choose a file")
      }
    }

    catch(e){
      console.log("error")
    }
  }

  return (<div>
    <input type="file" accept=".csv" onChange={(e)=>{
      if(e.target.files && e.target.files.length > 0){
        setStudentData(e.target.files[0])
      }
    }}/>

    <button onClick={()=>{
      fetchStudentData();
    }}>upload</button>
    
  </div>
  );
}

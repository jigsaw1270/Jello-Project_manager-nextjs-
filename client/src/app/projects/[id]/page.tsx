"use client";
import React, { useState } from 'react'
import ProjectHeader from "@/app/projects/ProjectHeader";


type Props = {
    params: { id: string};
};

const Project = ({params}: Props) => {
    const { id } =  params;
    const [ activeTab ,setActiveTab] = useState("Board");
    const [ isModalNewTaskOpen , setIsModalNewTaskOpen] = useState(false);
  return (
    <div>
        {/* MODAL NEW TASK */}
        <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />
        {/* { activeTab === "Board" && ( <Board/>)} */}
    </div>
  )
}

export default Project
import React, { useEffect, useState } from 'react'
import { SimpleGrid } from "@chakra-ui/react";
// import { useLoaderData } from 'react-router-dom';

export default function Dashboard () {
  //  const tasks = useLoaderData()

  const [tasks, setTasks] = useState([])

  useEffect(() => {
     taskLoad()
  }, [])

  const taskLoad = async () => {
    const res = await fetch('http://localhost:5000/tasks')

    const data = await res.json()
    setTasks(data)
  }
  
  return (
    <SimpleGrid spacing={10} minChildWidth='300px'>
       {tasks.map((task) => (
          <div>{task.title}</div>
       ))}
    </SimpleGrid>

  );

}

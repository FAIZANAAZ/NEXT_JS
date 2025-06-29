"use client";
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
// ye chizen lany ke liye help krta he yani ismy state ata he 
import { useDispatch } from 'react-redux';
// ye isiliye taky action ke zariye id la sky
import { removeTodo } from '../constant/Redux_Tolkit/features/todo/todoSlice';

///////////////////////////////////////////
const Todo = () => {
 const todosList= useSelector(((state:any) => state.todos));  
//   ye todes intial state me jo property thi wo use krty hen
const dispatch = useDispatch();

  return (
    <div className="w-[40%]  mx-auto p-4 border rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-4">Todo List</h2>
   

      <ul className="list-disc pl-6">
        {todosList.map((task: any, index: number) => (
          <li key={index} className="flex justify-between items-center mb-2">
            <span className="text-lg">{task.text}</span>
            <button
              onClick={() => dispatch(removeTodo(task.id))}
              className="ml-4 p-1 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;

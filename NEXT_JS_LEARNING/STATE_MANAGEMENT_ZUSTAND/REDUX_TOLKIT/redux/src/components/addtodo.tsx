"use client";
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// // ye reducer ko use krty howy store me value ko save krwata he 
import { addTodo } from '../constant/Redux_Tolkit/features/todo/todoSlice';


const AddTodo = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addTodo(inputValue));
    // hmny ye value bhejdi 
    setInputValue(''); // Clear the input field after submission

  };

  return (
    <div className="flex justify-center items-center  bg-gray-100">
      <form 
        onSubmit={handleSubmit} 
        className="bg-white p-6 rounded-lg shadow-lg w-96"
      >
        <label className="block text-lg font-semibold text-gray-700 mb-4" htmlFor="inputField">
          ADD TODO
        </label>
        <input
          type="text"
          id="inputField"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="mt-4 w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          ADD
        </button>
      </form>
    </div>
  );
};

export default AddTodo;

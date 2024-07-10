import React, { useState } from "react";

const Todo = ({id,title,description,complete,mongoId,deleteTodo,CompleteTodo}) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {id+1}
      </th>
      <td className="px-6 py-4">{title}</td>
      <td className="px-6 py-4">{description}</td>
      <td className="px-6 py-4">{complete? "Completed":"Pending"}</td>
      <td className=" ">
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-[#e05151e4]"
          onClick={()=>deleteTodo(mongoId)}
        >
          Delete
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-md ml-2  hover:bg-[#6ae180e4]"
          onClick={()=> CompleteTodo(mongoId)}
        >
          Done
        </button>
      </td>
    </tr>
  );
};

export default Todo;

import React, { useState } from "react";

const Todo = ({
  id,
  title,
  description,
  complete,
  mongoId,
  deleteTodo,
  CompleteTodo,
}: any) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {id + 1}
      </th>
      <td className="px-6 py-4 max-sm:px-1 max-sm:py-1">{title}</td>
      <td className="px-6 py-4 max-sm:px-1 max-sm:py-1">{description}</td>
      <td className="px-6 py-4 max-sm:px-1 max-sm:py-1">
        {complete ? "Completed" : "Pending"}
      </td>
      <td className=" btn-th">
        <div className="flex justify-center">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-[#e05151e4] max-sm:px-2 max-sm:py-2"
            onClick={() => deleteTodo(mongoId)}
          >
            Delete
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-md ml-2  hover:bg-[#6ae180e4] max-sm:px-2 max-sm:py-2"
            onClick={() => CompleteTodo(mongoId)}
          >
            Done
          </button>
        </div>
      </td>
    </tr>
  );
};

export default Todo;

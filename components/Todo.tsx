import React from "react";

const Todo = () => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        1
      </th>
      <td className="px-6 py-4">Study</td>
      <td className="px-6 py-4">Next js</td>
      <td className="px-6 py-4">Pending</td>
      <td className="px-6 py-4 text-right">
        <a
          href="#"
          className="bg-red-500 text-white px-4 py-2 rounded-md"
        >
          Delete
        </a>
      </td>
    </tr>
  );
};

export default Todo;

"use client";
import Todo from "@/components/Todo";
import axios from "axios";
import { mongo } from "mongoose";
import {
  ChangeEvent,
  FormEvent,
  ChangeEventHandler,
  useEffect,
  useState,
} from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const [todoData, setTodoData] = useState([]);

  const fetchTodo = async () => {
    const response = await axios("/api");
    setTodoData(response.data.todos);
  };

  const deleteTodo = async (id: any) => {
    const response = await axios.delete("/api", {
      params: {
        mongoId: id,
      },
    });
    toast.success(response.data.msg);
    fetchTodo();
  };
  const CompleteTodo = async (id: any) => {
    const response = await axios.put(
      "/api",
      {},
      {
        params: {
          mongoId: id,
        },
      }
    );
    toast.success(response.data.msg);
    fetchTodo();
  };

  useEffect(() => {
    fetchTodo();
  }, []);

  const onChangeHandler = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((form) => ({ ...form, [name]: value }));
    // console.log(formData)
  };

  const onSubmitHandler = async (e: any) => {
    e.preventDefault();
    try {
      // API catch
      const response = await axios.post("/api", formData);
      toast.success(response.data.msg);
      setFormData({
        title: "",
        description: "",
      });
      await fetchTodo();
    } catch (error) {
      toast.error("Error");
    }
  };
  return (
    <>
      <ToastContainer theme="colored" hideProgressBar />
      <form
        action=""
        className="flex items-start gap-4 w-[80%] max-w-[600px] flex-col mt-24 px-2 mx-auto"
        onSubmit={onSubmitHandler}
      >
        <input
          type="text"
          name="title"
          placeholder="Enter the title"
          className="px-3 py-2 border-2 w-full rounded-md"
          onChange={onChangeHandler}
          value={formData.title}
          required
        />
        <textarea
          name="description"
          placeholder="Enter the description"
          className="w-full px-3 py-2 border-2 rounded-md"
          onChange={onChangeHandler}
          value={formData.description}
          required
        ></textarea>
        <button
          className="bg-black text-white px-4 py-2 rounded-md hover:bg-[#232222]"
          type="submit"
        >
          Add Todo
        </button>
      </form>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-[60%] max-sm:w-[90%] mx-auto my-24 ">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 max-sm:px-1 text-center">
                ID
              </th>
              <th scope="col" className="px-6 py-3 max-sm:px-1">
                <div className="flex items-center">
                  Title
                  <a href="#">
                    <svg
                      className="w-3 h-3 ms-1.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                    </svg>
                  </a>
                </div>
              </th>
              <th scope="col" className="px-6 py-3 max-sm:px-1">
                <div className="flex items-center">
                  Description
                  <a href="#">
                    <svg
                      className="w-3 h-3 ms-1.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                    </svg>
                  </a>
                </div>
              </th>
              <th scope="col" className="px-6 py-3 max-sm:px-1">
                <div className="flex items-center">
                  Status
                  <a href="#">
                    <svg
                      className="w-3 h-3 ms-1.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                    </svg>
                  </a>
                </div>
              </th>
              <th scope="col" className="px-6 py-3 min-w-40 ">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {todoData.map((item: any, index) => {
              return (
                <Todo
                  key={index}
                  title={item?.title}
                  description={item?.description}
                  id={index}
                  complete={item?.isCompleted}
                  mongoId={item?._id}
                  deleteTodo={deleteTodo}
                  CompleteTodo={CompleteTodo}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { supabase } from "./supabase-client";

interface TaskListTypes {
  id: number;
  title: string;
  description: string;
  created_at: string;
}
export default function HomePage() {
  const [newTask, setNewTask] = useState({ title: "", description: "" });
  const [updateTaskDescription, setUpdateTaskDescription] = useState("");
  const [taskList, setTasklist] = useState<TaskListTypes[]>([]);

  const fetchTasks = async () => {
    const { error, data } = await supabase
      .from("tasks")
      .select("*")
      .order("created_at", { ascending: true });
    if (error) {
      console.log("Failed to tasks data", error.message);
      return;
    }
    setTasklist(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const { error } = await supabase.from("tasks").insert(newTask).single();
    if (error) {
      console.log("Failed to add the tasks", error.message);
      return;
    }
    setNewTask({ title: "", description: "" });
    alert("New tasks added successfully");
  };

  const handleDeleteTask = async (id: number) => {
    const { error } = await supabase.from("tasks").delete().eq("id", id);
    if (error) {
      console.log("Error deleting tasks", error.message);
      return;
    }
    alert("Tasks deleted successfully");
  };

  const handleUpdateTask = async (id: number) => {
    const { error } = await supabase
      .from("tasks")
      .update({ description: updateTaskDescription })
      .eq("id", id);
    if (error) {
      console.log("Error updating tasks", error.message);
      return;
    }
    alert("Tasks updated successfully");
  };

  return (
    <section className="flex flex-col items-center justify-center">
      <h2 className="bold mb-5 text-center text-3xl">Task Manager CRUD</h2>
      <div className="text-centerw-[35rem] w-2xl">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center space-y-5"
        >
          <Input
            type="text"
            placeholder="Tast title"
            required
            onChange={(e) =>
              setNewTask((prev) => ({ ...prev, title: e.target.value }))
            }
            className="h-12 w-full rounded border border-gray-300"
          />

          <textarea
            placeholder="Task Description"
            id=""
            cols={4}
            required
            onChange={(e) =>
              setNewTask((prev) => ({ ...prev, description: e.target.value }))
            }
            className="w-full rounded border border-gray-300 p-3"
          ></textarea>
          <Button className="h-12 w-[12rem] cursor-pointer rounded text-sm font-semibold">
            Add Task
          </Button>
        </form>

        {taskList.map((task) => (
          <div
            key={task.id}
            className="mt-4 flex w-full flex-col items-center justify-center space-y-3 rounded-sm border border-gray-100 py-8 shadow"
          >
            <h2 className="text-2xl font-semibold">{task.title}</h2>
            <p className="text-lg text-gray-400">{task.description}</p>

            <div className="space-x-3">
              <textarea
                onChange={(e) => setUpdateTaskDescription(e.target.value)}
                className="m-3 w-full rounded border border-gray-300 p-3"
                placeholder="updated description..."
              />
              <Button
                onClick={() => handleUpdateTask(task.id)}
                className="h-12 w-[12rem] cursor-pointer rounded text-sm font-semibold"
              >
                Edit
              </Button>
              <Button
                onClick={() => handleDeleteTask(task.id)}
                className="h-12 w-[12rem] cursor-pointer rounded border-none bg-red-700 text-sm font-semibold text-white hover:text-black"
              >
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

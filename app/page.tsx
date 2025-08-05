import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <section className="flex flex-col items-center justify-center">
      <h2 className="bold mb-5 text-center text-3xl">Task Manager CRUD</h2>
      <div className="text-centerw-[35rem] w-2xl">
        <form
          action=""
          className="flex flex-col items-center justify-center space-y-5"
        >
          <Input
            type="text"
            placeholder="Tast title"
            className="h-12 w-full rounded border border-gray-300"
          />

          <textarea
            placeholder="Task Description"
            id=""
            cols={4}
            className="w-full rounded border border-gray-300 p-3"
          ></textarea>
          <Button className="h-12 w-[12rem] cursor-pointer rounded text-sm font-semibold">
            Add Task
          </Button>
        </form>

        <div className="mt-8 flex w-full flex-col items-center justify-center space-y-3 rounded-sm border border-gray-100 py-8 shadow">
          <h2 className="text-2xl font-semibold">Title</h2>
          <p className="text-lg text-gray-400">Description</p>

          <div className="space-x-3">
            <Button className="h-12 w-[12rem] cursor-pointer rounded text-sm font-semibold">
              Edit
            </Button>
            <Button className="h-12 w-[12rem] cursor-pointer rounded border-none bg-red-700 text-sm font-semibold text-white hover:text-black">
              Delete
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

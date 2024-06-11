"use client";
import {
  useAddNotification,
  useFecthSingleNotification,
  useUpdateNotification,
} from "@/hooks/useNotifiaction";
import { showError } from "@/utils/helpers";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const NotificationForm = () => {
  const _id = useSearchParams().get("update") || undefined;
  const { data: notification } = useFecthSingleNotification(_id);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ defaultValues: notification });

  const { mutate: addNotification } = useAddNotification();
  const { mutate: updateNotification } = useUpdateNotification();
  useEffect(() => {
    reset(notification);
  }, [notification, reset]);

  const onSubmit = (data: any) => {
    if (notification) {
      updateNotification({ id: notification._id, data });
      return;
    }
    addNotification(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className=" rounded mb-4 w-full">
        <h2 className="text-2xl text-center text-primary md:text-4xl font-bold my-2 md:my-4">
          {notification ? "Update" : "Create New"} Notification
        </h2>

        {/* Title */}
        <div className="mb-4">
          <label
            className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
            htmlFor="title"
          >
            Title
          </label>
          <input
            {...register("title", { required: "Title is required" })}
            id="title"
            placeholder="Enter your Notification title"
            className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 dark:bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {showError(errors?.title?.message as string)}
        </div>
        {/* Title */}
        <div className="mb-4">
          <label
            className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
            htmlFor="title"
          >
            Message
          </label>
          <input
            {...register("body", {
              required: "Notification message is required",
            })}
            id="body"
            placeholder="Enter your Notification message"
            className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 dark:bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {showError(errors?.title?.message as string)}
        </div>

        {/* Image */}
        <div className="mb-4">
          <label
            className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
            htmlFor="image"
          >
            Image URL
          </label>
          <input
            {...register("image", { required: "Image URL is required" })}
            id="image"
            placeholder="Enter the url of image"
            className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 dark:bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {showError(errors?.image?.message as string)}
        </div>

        <div className="flex items-center justify-between">
          <button type="submit" className="btn">
            {notification ? "Update" : "Add"} Notification
          </button>
        </div>
      </form>
    </>
  );
};

export default NotificationForm;

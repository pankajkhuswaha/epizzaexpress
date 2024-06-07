import Swal from "sweetalert2";

export const showError = (error?: string) => {
  if (error) {
    return <p className="text-red-500 text-xs italic">{error}</p>;
  }
};

export const failedAlert = (title = "Oops..", message = "fail") => {
  return Swal.fire({
    title,
    icon: "error",
    text: message,
  });
};
export const successAlert = (title = "Oops..", message = "fail") => {
  return Swal.fire({
    title,
    icon: "success",
    text: message,
  });
};

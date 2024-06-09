import swal from "sweetalert";

export const showError = (error?: string) => {
  if (error) {
    return <p className="text-red-500 text-xs italic">{error}</p>;
  }
};

export const failedAlert = (title = "Oops..", message = "fail") => {
  return swal({
    title,
    icon: "error",
    text: message,
  });
};
export const successAlert = (title = "Oops..", message = "fail") => {
  return swal({
    title,
    icon: "success",
    text: message,
  });
};

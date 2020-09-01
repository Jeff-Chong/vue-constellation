export function requestRejected(todoFunc) {
  if (!todoFunc) {
    todoFunc = () => {};
  }
  return function appliedRequestRejected({ message, response }) {
    todoFunc();
    let msg;
    if (response) {
      msg = response.data.error || "接口请求失败";
    } else {
      msg = message;
    }
    throw msg;
  };
}

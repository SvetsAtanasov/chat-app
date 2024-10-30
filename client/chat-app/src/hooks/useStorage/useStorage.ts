import { removeToken, storeToken } from "../../utils/localStorage/localStorage";

const useStorage = (method: "store" | "remove", value?: string) => {
  const storageUpdate = new Event("storage-update");

  if (method === "store" && value) {
    storeToken(value);
    window.dispatchEvent(storageUpdate);
  } else {
    removeToken();
    window.dispatchEvent(storageUpdate);
  }
};

export default useStorage;

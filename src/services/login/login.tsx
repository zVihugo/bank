import { api } from "../../api";

export const login = async (email: string): Promise<boolean> => {
  const data: any = await api;
  console.log(data);
  if (email !== data.email) {
    return false;
  }

  return true;
};

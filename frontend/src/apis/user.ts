import { client } from "../../../backend/lib/client";

export const getUserApi = async (name: string, pass: string) => {
  const data = await client.fetch(
    `*[_type == 'user' && userName == "${name}" && password == "${pass}" ][0]`
  );
  return data;
};

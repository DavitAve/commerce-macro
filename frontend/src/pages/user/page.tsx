import { FC } from "react";
import { IUser } from "../../interfaces/store";
import useLocaleStorage from "../../hooks/useLocaleStorage";

const UserPage: FC = () => {
  const [user] = useLocaleStorage<IUser | null>("user");

  return <span>Name: {user?.userName}</span>;
};

export default UserPage;

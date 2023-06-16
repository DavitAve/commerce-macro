export interface IStoreState {
  userSlice: IUserState;
}

export interface IUserState {
  user: IUser | null;
}

export interface IUser {
  _createdAt: string;
  _rev: string;
  _type: string;
  _id: string;
  userName: string;
  _updatedAt: string;
  password: string;
}

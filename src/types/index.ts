export interface ChildrenProps {
  children: React.ReactNode;
}

export interface Params {
  params: Record<string, string>;
}

export interface UserProp {
  name: string;
  email: string;
  role: string;
  mobile: string;
  image?: string;
}
export interface NotificationProp {
  _id: string;
  title: string;
  body: string;
  image?: string;
  createdAt: string;
}

export interface BlogProp {
  _id: string;
  slug: string;
  title: string;
  paragraph: string;
  category: string;
  content: string;
  image: string;
  author: UserProp;
  createdAt: string;
}

export interface IUser {
  displayName: string;
  email: string;
  phoneNumber?: string;
  photoURL?: string;
  emailVerified: boolean;
  token: string;
}

export interface ApiResponse {
  message: string;
  [key: string]: any;
}

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

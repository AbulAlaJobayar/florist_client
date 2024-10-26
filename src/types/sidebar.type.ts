import { ReactNode } from "react";



export type TRoute = {
  path: string;
  element: ReactNode;
  icon?:ReactNode
};
export type TSidebarItem = {
  key: string;
  label: ReactNode;
  children?: TSidebarItem[];
}| undefined | any;

export type TUserPath = {
  name?: string;
  path?: string;
  element?: ReactNode;
  icon?:ReactNode
  children?: any;
};

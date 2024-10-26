
import { ReactNode } from "react";
import { TRoute, TUserPath } from "../types";


export const routeGenerator = (items: TUserPath[]) => {
        const routes = items.reduce((acc: TRoute[], item) => {
          if (item.path && item.element) {
            acc.push({
              path: item.path,
              element: item.element,
              icon:item.icon as ReactNode
            });
          }
      
          if (item.children) {
            item.children.forEach((child:any) => {
              acc.push({
                path: child.path!,
                element: child.element,
                icon: child.icon as ReactNode
              });
            });
          }
      
          return acc;
        }, []);
      
        return routes;
      };
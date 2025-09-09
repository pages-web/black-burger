import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const readFile = (url: string = "", width?: number): string => {
  return `${process.env.ERXES_API_URL}/read-file?key=${url}&width=${
    width ? width : "800"
  }`;
};

import { twMerge } from "tailwind-merge";
import { ClassValue, clsx } from "clsx";

export const cn = (...values: ClassValue[]) => twMerge(clsx(values));

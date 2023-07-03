import { cn } from "../../utils/cn";
import { gridReorder } from "../../utils/gridReorder";

export default function ArticlesSkeleton() {
  return Array.from({ length: 3 }).map((_, parentIndex) => (
    <div
      key={parentIndex}
      className="lg:h-[500px] mt-3 lg:mt-20 grid lg:grid-cols-4 grid-cols-1 lg:grid-rows-2 gap-3"
    >
      {Array.from({ length: 5 }).map((_, childIndex) => (
        <div
          key={childIndex}
          className={cn(
            "relative group overflow-hidden h-[550px] lg:h-auto bg-gray-200 animate-pulse",
            "col-span-1 row-span-1 rounded",
            childIndex === 0 && "lg:col-span-2 lg:row-span-2",
            gridReorder(parentIndex, childIndex)
          )}
        >
          <div
            className={cn(
              "absolute h-[40%] bg-gray-300 w-full bottom-0 left-0 animate-pulse",
              childIndex !== 0 && "lg:hidden"
            )}
          ></div>
        </div>
      ))}
    </div>
  ));
}

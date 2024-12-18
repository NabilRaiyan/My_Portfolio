import { cn } from "@/lib/utils";
import Image from "next/image";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  image,
  id,
  imgClassName
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  image?: string;
  id: number;
  imgClassName?: string;
}) => {
  const renderContentBasedOnId = () => {
    switch (id) {
      case 2:
        return (
        <div className="text-base font-bold text-white "
          style={{
            backgroundImage: (image || id === 2) ? `url(${image})` : undefined,
            backgroundSize: "100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <ul className="flex gap-8 list-none mt-0 relative bottom-10 ">
            <li className="flex flex-wrap gap-8 h-28">
              <ul className="bg-gradient-to-r from-indigo-900 via-indigo-600 to-indigo-400 rounded p-2">Next JS</ul>
              <ul className="bg-gradient-to-r from-indigo-500 via-indigo-800 to-indigo-600 rounded p-2">Nest JS</ul>
            </li>
            <li className="flex flex-wrap gap-8">
              <ul className="bg-gradient-to-r from-indigo-900 via-indigo-600 to-indigo-400 rounded p-2">PostgreSQL</ul>
              <ul className="bg-gradient-to-r from-indigo-500 via-indigo-800 to-indigo-600 rounded p-2">Jest</ul>
              <ul className="bg-gradient-to-r from-indigo-900 via-indigo-600 to-indigo-400 rounded p-2">Vercel</ul>
              <ul className="bg-gradient-to-r from-indigo-900 via-indigo-600 to-indigo-400 rounded p-2">more...</ul>
            </li>
        </ul>
        </div>);
      case 3:
        return <div className="text-lg font-bold text-green-500">Content for ID 3</div>;
      case 4:
        return <div className="text-lg font-bold text-green-500">Content for ID 4</div>;

    }
  };

  return (
    <div
      className={cn(
        `${id === 2 ? "row-span-1" : ""} rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:border-white/[0.1] border justify-between flex flex-col`,
        className
      )}

      style={{
        backgroundImage: (image || id === 1) ? `url(${image})` : undefined,
        backgroundSize: "80%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {renderContentBasedOnId()} {/* Dynamically rendered content based on the id */}
        <div className={`${id === 2 ? 'relative bottom-6': ''} font-poppins font-bold text-orange-500 dark:text-neutral-200 mb-2`}>
          {title}
        </div>
        <div className="font-poppins font-normal text-orange-500 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};

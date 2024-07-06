import { twMerge } from "tailwind-merge";

interface TitleProps {
  title: string;
  link: string;
  className?: string;
}

function Title({ title, link, className }: TitleProps) {
  return (
    <a
      href={link}
      target="_blank"
      className={twMerge("group flex gap-2 relative", className)}
    >
      <p className="group-hover:text-primary transition-colors duration-150 ease-in text-white opacity-[85%] text-lg">
        {title}
      </p>
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="text-white w-[14px] top-2 h-[14px] relative group-hover:text-primary transition-all group-hover:translate-x-1 group-hover:-translate-y-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
          />
        </svg>
      </span>
    </a>
  );
}

export default Title;

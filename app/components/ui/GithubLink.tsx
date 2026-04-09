import { GithubIcon } from "./Icons";

interface GithubLinkProps {
  className?: string;
  iconClassName?: string;
}

export default function GithubLink({ className, iconClassName }: GithubLinkProps) {
  return (
    <a
      href="https://github.com/luizfelipeleite/ilia-charts"
      target="_blank"
      rel="noopener noreferrer"
      className={
        className ||
        "p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white transition-colors"
      }
      aria-label="GitHub"
    >
      <GithubIcon className={iconClassName || "w-5 h-5"} />
    </a>
  );
}

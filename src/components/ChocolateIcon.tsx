
import { SVGProps } from "react";

export function ChocolateIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="2" />
      <path d="M2 7h20" />
      <path d="M7 2v20" />
      <path d="M12 2v20" />
      <path d="M17 2v20" />
      <path d="M2 12h20" />
      <path d="M2 17h20" />
    </svg>
  );
}

import { cn } from "@/lib/utils";
import { createElement } from "react";

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  text: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export default function Title({ text, as = "h1", ...rest }: TitleProps) {
  return createElement(
    as,
    {
      ...rest,
      className: cn(
        "text-5xl max-sm:text-2xl font-svn-mightiest font-semibold leading-[3.6rem] max-sm:leading-[1.95rem] tracking-[-0.06rem] max-sm:tracking-[-0.045rem] text-primary",
        rest.className
      ),
    },
    text
  );
}

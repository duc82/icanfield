import { cn } from "@/lib/utils";
import Link from "next/link";
import { Fragment } from "react";

interface IDataBreadcrumb {
  title: string;
  slug: string;
}
export default function Breadcrumb({
  data,
  className,
}: {
  data: IDataBreadcrumb[];
  className?: string;
}) {
  return (
    <div className={cn("flex items-center justify-start space-x-2", className)}>
      <Link
        href="/"
        className="text-sm font-medium leading-[1.3135rem] tracking-[-0.0175rem] whitespace-nowrap transition-all duration-500 text-white/60 hover:text-white"
      >
        Trang chủ
      </Link>
      <div className="rounded-full size-[0.3125rem] shrink-0 bg-white/60"></div>
      {data.map((item: IDataBreadcrumb, index: number) => (
        <Fragment key={index}>
          <Link
            href={item.slug}
            className={cn(
              "text-sm font-medium leading-[1.3135rem] tracking-[-0.0175rem] transition-all line-clamp-1 duration-500 text-white/60 hover:text-white",
              index + 1 === data.length && "text-white",
              index === 0 && "whitespace-nowrap"
            )}
          >
            {item.title}
          </Link>
          {index + 1 !== data?.length && (
            <div className="rounded-full size-[0.3125rem] shrink-0 bg-white/60"></div>
          )}
        </Fragment>
      ))}
    </div>
  );
}

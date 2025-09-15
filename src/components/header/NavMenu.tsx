import type { NavItem as INavItem } from "@/types/header";
import NavItem from "./NavItem";

interface NavMenuProps {
  datas: INavItem[];
}

export default function NavMenu({ datas }: NavMenuProps) {
  return (
    <ul className="h-[4.375rem] flex items-center gap-10">
      {datas.map((data, index) => (
        <NavItem key={index} data={data} />
      ))}
    </ul>
  );
}

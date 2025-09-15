interface SubItem {
  title: string;
  href: string;
  image: string;
}

export interface NavItem {
  title: string;
  href?: string;
  icon?: string;
  className?: string;
  x?: string;
  subMenus?: SubItem[];
}

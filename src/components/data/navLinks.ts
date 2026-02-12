export interface NavLink {
  label: string;
  href: string;
  subLinks?: { label: string; href: string }[];
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Membership", href: "/membership" },
  { label: "Features", href: "/features" },
  { label: "Resources", href: "/resource" },
  { label: "Goals", href: "/goals" },
  { label: "Contact", href: "/contact" },
];

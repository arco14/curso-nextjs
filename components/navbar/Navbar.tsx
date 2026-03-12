import { HomeIcon } from "@primer/octicons-react"
import Link from "next/link"
import { ActiveLink } from "../active-link/ActiveLink"
const navItems = [
  { path: '/about', text: 'About' },
  { path: '/pricing', text: 'Pricing' },
  { path: '/contact', text: 'Contact' },
]
export const Navbar = () => {
  return (
    <nav className="flex bg-black bg-opacity-30 p-2 m-2 rounded shadow-blue-50">

      <Link href={'/'} className="flex items-center gap-2">
        <HomeIcon />
        <span className="mr-2">Home</span>
      </Link>

      <div className="flex flex-1"></div>

      {
        navItems.map( navItem => (
            <ActiveLink key={ navItem.path } {...navItem} />
        ))
      }
    </nav>
  )
}

//? PROPS
'use client'
import Link from "next/link"
import style from './ActiveLink.module.css'
import { usePathname } from "next/navigation"

interface Props {
    path: string,
    text: string
}

export const ActiveLink = ({ path, text }: Props) => {
    
    //? Indica el path en el que nos encontremos navegando
    const pathName = usePathname() 
    
  return (
    <Link 
        className={ `${ style.link }  ${ (pathName === path) && style['link-active']} `}
         href={ path }>{ text }</Link>
  )
}

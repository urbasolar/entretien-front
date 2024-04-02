import { Dispatch, SetStateAction } from "react"

export type TNavbar = {
    openNavbar: boolean
    setOpenNavbar: Dispatch<SetStateAction<TNavbar["openNavbar"]>>
    themeMode: string | null
}
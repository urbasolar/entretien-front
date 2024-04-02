import { useEffect, useState } from "react"

import { TNavbar } from "@components/navbar/navbar.types"
import { getDataLocalStorage } from "@utils/localStorage";

export const useNavbar = (): TNavbar => {
    const [openNavbar, setOpenNavbar] = useState(true)
    const [themeMode, setThemeMode] = useState(getDataLocalStorage('themeMode'));

    useEffect(() => {
        const handleStorage = () => {
          const mode = getDataLocalStorage('themeMode');
          setThemeMode(mode);
        };
        window.addEventListener('storage', handleStorage);
        return () => window.removeEventListener('storage', handleStorage);
      }, []);

    return {
        openNavbar,
        setOpenNavbar,
        themeMode,
    }
}
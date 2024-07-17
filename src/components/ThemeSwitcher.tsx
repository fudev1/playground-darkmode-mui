import  PaletteIcon  from '@mui/icons-material/Palette'
import { Button, Menu, MenuItem } from '@mui/material'
import React from 'react'
import { IThemeContext, IThemeMode } from '../theme/types';
import { ThemeContext } from '../theme';
import { useContext, useRef, useState } from 'react';

const ThemeSwitcher: React.FC = () => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const {themeMode, switchThemeMode} = useContext(ThemeContext) as IThemeContext;

    const handleOpen = () => {
        setOpenMenu(true);
    };

    const handleClose = () => {
        setOpenMenu(false);
    };

    const handleSwitchThemeMode = (mode: IThemeMode) => {
        switchThemeMode(mode);
        handleClose();
    };

  return (
    <>
        <Button
            variant="contained"
            onClick={handleOpen}
            startIcon={<PaletteIcon />}
            ref={buttonRef}
        >
            Switch Theme     
        </Button>

        <Menu open = {openMenu} anchorEl = {buttonRef.current} onClose = {handleClose}>
            <MenuItem onClick = {() => handleSwitchThemeMode(IThemeMode.LIGHT)} selected={themeMode === IThemeMode.LIGHT}>Light</MenuItem>
            <MenuItem onClick = {() => handleSwitchThemeMode(IThemeMode.DARK)} selected={themeMode === IThemeMode.DARK}>Dark</MenuItem>
            <MenuItem onClick = {() => handleSwitchThemeMode(IThemeMode.SYSTEM)} selected={themeMode === IThemeMode.SYSTEM}>System</MenuItem>
        </Menu>
    </>
  )
}

export default ThemeSwitcher
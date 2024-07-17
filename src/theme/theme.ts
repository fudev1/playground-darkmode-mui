import { Theme, createTheme } from '@mui/material';

export const AppLightTheme: Theme = createTheme({
    palette: {
        background: {
            default: '#fff',
            paper: '#fff',
        },
        text: {
            primary: '#000',
            secondary: '#000',
        },
    },
});

export const AppDarkTheme: Theme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#000',
            paper: '#000',
        },
        text: {
            primary: '#fff',
            secondary: '#fff',
        },
    },
});
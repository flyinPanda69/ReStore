import { AppBar, Switch, Toolbar, Typography } from "@mui/material";

interface Props {
    isDarkMode : boolean;
    onDarkModeToggle : () => void;
}

export default function Header( {isDarkMode, onDarkModeToggle }: Props) {

    return (
        <AppBar position="static" sx={{mb:4}}>
            <Toolbar>
                <Typography variant="h6">
                    ReStore
                </Typography>
                <Switch checked ={isDarkMode} onChange = {() => onDarkModeToggle()} />
            </Toolbar>
        </AppBar>
    )
 }
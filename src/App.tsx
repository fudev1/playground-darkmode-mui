import { Box, Paper, Typography } from "@mui/material"
import ThemeSwitcher from "./components/ThemeSwitcher"

function App() {

  return (
    <>
      <div>
        
          <ThemeSwitcher />

          <Paper>
            <Box>
              <Typography>Hello World</Typography>
            </Box>
          </Paper>

      </div>
    </>
  )
}

export default App

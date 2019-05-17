import { createMuiTheme } from '@material-ui/core/styles'
import Grey from '@material-ui/core/colors/grey'

export const darkTheme = createMuiTheme({
  palette: {
    type: 'dark'
  },
  typography: {
    useNextVariants: true,
    fontSize: 16
  }
})

export const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
    background: {
      default: Grey[200],
      paper: Grey[300]
    }
  },
  typography: {
    useNextVariants: true,
    fontSize: 16
  }
})

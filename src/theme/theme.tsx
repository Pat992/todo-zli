import { createMuiTheme } from '@material-ui/core/styles'
import { pink } from '@material-ui/core/colors'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: pink[900]
        },
        secondary: {
            main: pink[700]
        }
    }
})

export default theme;

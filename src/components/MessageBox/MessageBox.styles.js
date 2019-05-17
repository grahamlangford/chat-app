import { makeStyles } from '@material-ui/styles'

export default makeStyles(theme => ({
  messageBox: {
    border: `solid ${theme.palette ? theme.palette.primary.main : ''}`,
    borderRadius: 4,
    boxShadow:
      '0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12)',
    minHeight: 100,
    maxHeight: '60vh',
    minWidth: '50vw',
    maxWidth: '100%',
    margin: theme.spacing ? `${theme.spacing.unit * 5}px 0` : 0,
    padding: theme.spacing
      ? `${theme.spacing.unit * 3}px ${theme.spacing.unit * 1}px`
      : 0
  },
  message: {
    display: 'flex',
    width: `calc(100% - ${theme.spacing ? theme.spacing.unit * 4 : '0'}px)`,
    border: `solid ${theme.palette ? theme.palette.primary.main : ''}`,
    borderRadius: 4,
    padding: theme.spacing
      ? `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`
      : 0,
    margin: theme.spacing ? theme.spacing.unit * 2 : 0
  },
  grow: { flexGrow: 1 },
  width100: { width: '100%' },
  flex: { display: 'flex' },
  whiteSpace: { whiteSpace: 'pre' }
}))

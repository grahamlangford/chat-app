import { makeStyles } from '@material-ui/styles'

export default makeStyles(theme => ({
  form: {
    border: `solid ${theme.palette ? theme.palette.primary.main : ''}`,
    borderRadius: 4,
    boxShadow:
      '0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12)',
    minHeight: 100,
    minWidth: '50vw',
    maxWidth: '100%',
    margin: theme.spacing ? `${theme.spacing.unit * 5}px 0` : 0,
    padding: theme.spacing ? theme.spacing.unit * 4 : 0,
    paddingBottom: theme.spacing ? theme.spacing.unit * 2 : 0
  },
  displayNone: { display: 'none' },
  text: {
    marginBottom: theme.spacing ? theme.spacing.unit * 2 : 0
  },
  flex: { display: 'flex', width: '100%' },
  grow: {
    flexGrow: 1
  }
}))

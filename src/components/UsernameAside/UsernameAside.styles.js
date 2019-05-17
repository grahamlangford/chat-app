import { makeStyles } from '@material-ui/styles'

export default makeStyles(theme => ({
  aside: {
    border: `solid ${theme.palette ? theme.palette.primary.main : ''}`,
    borderRadius: 4,
    boxShadow:
      '0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12)',
    height: 400,
    minWidth: 200,
    maxWidth: '100%',
    margin: theme.spacing ? `0 0 ${theme.spacing.unit * 5}px` : 0,
    padding: theme.spacing ? theme.spacing.unit : 0
  },
  title: {
    margin: theme.spacing
      ? `${theme.spacing.unit * 5}px 0 0 ${theme.spacing.unit * 5}px`
      : 0
  },
  horizontal: {
    height: 200,
    minWidth: '100%'
  },
  listHorizontal: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexShrink: 1,
    padding: 0
  },
  listItem: {
    width: 'auto',
    border: `solid ${theme.palette ? theme.palette.primary.main : ''}`,
    background: theme.palette ? theme.palette.background.paper : '',
    borderRadius: 4,
    padding: theme.spacing ? `0 ${theme.spacing.unit}px` : 0,
    margin: theme.spacing ? theme.spacing.unit : 0
  },
  listText: {
    padding: 0
  }
}))

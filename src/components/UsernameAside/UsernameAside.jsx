import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import { Scrollbars } from 'react-custom-scrollbars'

import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import useStyles from './UsernameAside.styles'

import { useChat } from '../../context/chatContext/chatContext'
import useWindowSize from '../../hooks/useWindowSize'
import useRenderCounter from '../../hooks/useRenderCounter'

import utils from '../../utils/utils'

const UsernameAside = () => {
  const classes = useStyles()
  const { width } = useWindowSize()

  const { users } = useChat()
  const [sortedUsers, setSortedUsers] = useState([])
  const renderCount = useRenderCounter()

  useEffect(() => {
    const sorted = utils.objToSortedArray(users)
    setSortedUsers(sorted)
  }, [users])

  return (
    <>
      <Typography variant="h6" className={classes.title}>
        Users
      </Typography>
      {renderCount}

      <div
        className={classNames(classes.aside, {
          [classes.horizontal]: width < 960
        })}
        data-testid="username-aside"
      >
        <Scrollbars
          autoHeight
          autoHeightMin={100}
          autoHeightMax={width < 960 ? 180 : 360}
        >
          <List
            disablePadding
            className={classNames({
              [classes.listHorizontal]: width < 960
            })}
          >
            {sortedUsers.map(user => (
              <ListItem className={classes.listItem}>
                <ListItemText primary={user} className={classes.listText} />
              </ListItem>
            ))}
          </List>
        </Scrollbars>
      </div>
    </>
  )
}

export default UsernameAside

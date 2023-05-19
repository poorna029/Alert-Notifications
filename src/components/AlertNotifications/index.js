import {Component} from 'react'
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'

class AlertNotifications extends Component {
  render() {
    return (
      <>
        <h1>Alert Notifications</h1>
        <Notification
          heading="Success"
          description="You can access all the files in the folder"
        >
          <AiFillCheckCircle />
        </Notification>
        <Notification
          heading="Error"
          description="Sorry, you are not authorized to have access to delete the file"
        >
          <RiErrorWarningFill />{' '}
        </Notification>
        <Notification
          heading="Warning"
          description="Viewers of this file can see comments and suggestions"
        >
          <MdWarning />
        </Notification>
        <Notification
          heading="Info"
          description="Anyone on the internet can view these files"
        >
          <MdInfo />
        </Notification>
      </>
    )
  }
}

export default AlertNotifications

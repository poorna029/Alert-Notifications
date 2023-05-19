import {GrFormClose} from 'react-icons/gr'
import './index.css'

const Notification = props => {
  const {heading, description} = props
  const {children} = props
  return (
    <div className={`flat ${heading}`}>
      <div className="second">
        <div className="clear">{children}</div>
        <div className="self">
          <h1>{heading}</h1>
          <p>{description}</p>
        </div>
      </div>

      <GrFormClose />
    </div>
  )
}

export default Notification

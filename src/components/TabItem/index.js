// Write your code here
import './index.css'

const TabItem = props => {
  const {eachTab, clickEvent, condition} = props
  const {displayText, tabId} = eachTab
  console.log(tabId)
  const onDisplay = () => clickEvent(tabId)
  const style = condition ? 'highlight' : ''
  return (
    <li>
      <button className={`button ${style}`} type="button" onClick={onDisplay}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem

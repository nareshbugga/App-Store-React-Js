/* eslint-disable no-unused-vars */
// Write your code here
import './index.css'

const AppItem = props => {
  const {eachApp} = props
  const {appId, appName, imageUrl, category} = eachApp
  return (
    <li className="app-container">
      <img src={imageUrl} alt={appName} className="image" />
      <p>{appName}</p>
    </li>
  )
}
export default AppItem

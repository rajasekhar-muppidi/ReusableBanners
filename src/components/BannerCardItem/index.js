import './index.css'
const BannerCardItem = props => {
  const {userDetails} = props
  const {headerText,description}=userDetails 
  return(
    <h1>{headerText}</h1>
    <h1>{description}</h1>
  )
} 
export default BannerCardItem

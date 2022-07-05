import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router-dom'

const Header = ({ title, onAdd, showAdd }) => {

  const Location = useLocation()
 
  return (
    <header className='header'>
      <h1>{title}</h1>
      {location.pathname === '/' &&(
      <Button 
      color={showAdd ? 'red' : 'green'} 
      text={showAdd ? 'Close' : 'Add'} 
      onClick={onAdd} />
      )}
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

// CSS in JS, pass in the style in the header
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black',
// } 

export default Header;
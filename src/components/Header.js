import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
  const onClick = () => {
    console.log('click')
  }
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button text='Add' onClick={onClick} />
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

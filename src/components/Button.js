import { click } from '@testing-library/user-event/dist/click'
import PropTypes from 'prop-types'

const Button = ({ color, text }) => {

    const onClick = () => {
        console.log(click)
    }

  return <button style={{ backgroundColor: color }} className='btn'>{text}
  </button>
}

// Button.defaultProps = {
//     color: 'blue',
// }

// Button.PropTypes = {
//     text: PropTypes.string,
// //     color: PropTypes.string,
// }
export default Button

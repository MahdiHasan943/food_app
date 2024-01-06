
import { useFormStatus} from 'react-dom'

const Button = ({ value,...props }) => {
    const {pending} = useFormStatus();
  return (

      <button className='text-white bg-[#FC8A06]  py-4 px-12 rounded-md'  {...props} disabled={pending}>
          {pending ? 'loading...' : value}
       </button>
    )
}

export default Button
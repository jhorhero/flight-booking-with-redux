
import { GiRocketFlight } from "react-icons/gi"
const Nevbar = () => {
  return (
    <header className='w-full p-4 bg-red-50 '>
        <nav className='flex items-center justify-between max-w-6xl mx-auto'>
                <a href="/" className='text-lg font-bold flex items-center '><GiRocketFlight className="text-2xl  mr-1 text-pink-600"/> Flight<span className="text-pink-600">Booking</span></a>
                <button className='bg-pink-600 text-white px-6 py-2 rounded font-medium'>Login</button>
        </nav>
    </header>
  )
}

export default Nevbar
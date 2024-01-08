

import './App.css'
import Nevbar from './Components/Nevbar/Nevbar'
import Booking from './Components/Booking/Booking';
import Table from './Components/Table/Table';

function App() {
 

  return (
    <div className='bg-[url(../src/assets/banner.jpg)] bg-cover bg-no-repeat'>
     <Nevbar/>
      <section className='h-screen'>
        <Booking/>
        <Table/>
      </section>
    </div>
  )
}

export default App

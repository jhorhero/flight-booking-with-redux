import { useState } from "react";
import { TiPlus } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { makeBooking } from "../../redux/action";

const Booking = () => {
    const data = useSelector((state)=> state.data);
    const dispatch = useDispatch();
    const size = data.length

    const [bookingData,setBookingData] = useState();


    const handleChane =(e)=>{
        console.log(e.target.value)
        const newBookingData = {...bookingData}
        newBookingData[e.target.name] = e.target.value
        setBookingData(newBookingData)
    }

    const handleBook =(e)=>{
        e.preventDefault()
        if(Object.keys(bookingData).length === 5){
            dispatch(makeBooking({...bookingData,id:size+1}))
        }else{
            alert("Please select Data Properly")
        }
    }
    console.log(bookingData)
  return (
    <div className="md:mt-40 mt-24 mx-4 relative">
        <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
            <form className="flex flex-col md:flex-row">
                {/* from */}
                <div className="py-1.5 px-2.5 flex-1 border-r-2"> 
                    <p>Destination Form</p>
                    <div className="flex flex-row">
                        <select onChange={(e)=>{handleChane(e)}} className="outline-none p-2 w-full" name="from" id="from">
                            <option value="">Please Select</option>
                            <option >New York</option>
                            <option >London</option>
                            <option >Paris</option>
                            <option >Rome</option>
                        </select>
                    </div>
                </div>

                {/* Destination to*/}
                <div className="py-1.5 px-2.5 flex-1 border-r-2"> 
                    <p>Destination To</p>
                    <div className="flex flex-row">
                        <select onChange={(e)=>{handleChane(e)}}  className="outline-none p-2 w-full" name="to" id="to">
                            <option value="">Please Select</option>
                            <option >New York</option>
                            <option >London</option>
                            <option >Paris</option>
                            <option >Rome</option>
                        </select>
                    </div>
                </div>
                {/* Date */}
                <div className="py-1.5 px-2.5 flex-1 border-r-2"> 
                    <p>Journey Date</p>
                    <input onChange={(e)=>{handleChane(e)}}  type="date" name="date" className="outline-none p-2 w-full" required/>
                </div>

                {/* Guest */}
                <div className="py-1.5 px-2.5 flex-1 border-r-2"> 
                    <p>Guests</p>
                    <div className="flex flex-row">
                        <select onChange={(e)=>{handleChane(e)}}  className="outline-none p-2 w-full" name="guests" id="guests">
                            <option value="">Please Select</option>
                            <option >1 Person</option>
                            <option >2 Persons</option>
                            <option >3 Persons</option>
                            <option >4 Persons</option>
                           
                        </select>
                    </div>
                </div>
                 
                 {/* Travel class */}
                 <div className="py-1.5 px-2.5 flex-1 border-r-2"> 
                    <p>Travel Class</p>
                    <div className="flex flex-row">
                        <select onChange={(e)=>{handleChane(e)}}  className="outline-none p-2 w-full" name="classname" id="classname">
                            <option value="">Please Select</option>
                            <option >Bussiness</option>
                            <option >Economy</option>
                            
                           
                           
                        </select>
                    </div>
                </div>

                {/* Button */}
                <button type="submit" onClick={(e)=> handleBook(e)}  className="px-8 flex items-center py-1 space-x-2 bg-pink-500 text-white "><TiPlus className="mr-1" /> Book Now</button>

            </form>
             </div>
    </div>
  )
}

export default Booking
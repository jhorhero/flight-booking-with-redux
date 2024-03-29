import { useDispatch, useSelector } from "react-redux"
import { MdDelete } from "react-icons/md";
import { deleteBooking } from "../../redux/action";

const Table = () => {
    const data = useSelector((state)=> state.data)
    const dispatch = useDispatch()


    const handleDelete = (e)=>{
const id = parseInt(e.currentTarget.id)
        dispatch(deleteBooking(id))
    }
    console.log(data)
  return (
    <> 
        {
            data.length && (
                <div className="max-w-6xl mx-auto mt-5 bg-white">
                        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Destination Form</th>
        <th>Destination To</th>
        <th>Journey Date</th>
        <th>Guests</th>
        <th>Travel Class</th>
        <th>DELETE</th>
      </tr>
    </thead>
    <tbody>
      {/* MAP */}
       {
        data.map((data,index)=>(
            <tr key={index}>
            <td>{data?.from}</td>
            <td>{data?.to}</td>
            <td>{data?.date}</td>
            <td>{data?.guests}</td>
            <td>{data?.classname}</td>
            <td ><button id={`${data.id}`} onClick={(e)=> handleDelete(e)} className="btn-xs "><MdDelete className="text-red-600 text-2xl" /></button></td>
        
          </tr>  
        ))
       }             


     
     
    </tbody>
  </table>
</div>
                </div>
            )
        }
    </>
  )
}

export default Table
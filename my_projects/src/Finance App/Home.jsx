
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addHist } from './Store/Slices/ExpenseSlice';
import { setDetail } from './Store/Slices/DetailSlice';
import { addAgain } from './Store/Slices/BalanceSlice';

const Home = () => {
// import Data from Store.
    const data = useSelector((state) => {
        return state.Expense;
    })
    
    const Balance = useSelector((state) => {
        return state.balance;
    })
   
    const navigate = useNavigate();
    const dispatch = useDispatch();

// Navigate to Detailed Page with index Data.
    const detailed = (index) =>{
    const item = data[index];
    dispatch(setDetail(item));
    navigate(`/detail/${index}`);
   }
// ADDAgain Function, FormData.amount transfer to BalanceSlice.
   const AddAgain = (index) =>{
    const item1 = data[index]
    dispatch(addHist(item1));
    const item2 = data[index].formData.amount;
    dispatch(addAgain(item2));
    
   }

  return (
    <div>
        <div className="container rounded-4 bg-primary text-center my-3 text-white w-75">
        <div className="p-4">
            <h1> ${Balance} </h1>
            <p> Total Expense </p>
            <Link to={"./addbalance"}>
                <button className='btn btn-light text-primary'> Add Expense </button>
            </Link>    
        </div>   
        </div>

    {/* 0utPut  */}
    <div className="container w-75 my-5">
    <h2> Payment History </h2>

    {(data.length >= 1) ?
    (data.map((item , index) =>{
        return(
        <div className="bg-map rounded-4 my-3" key={index}>
        <div className="p-3">
        <div className="float-end my-2">
            <button className='btn btn-sm btn-primary' onClick={()=> AddAgain(index)}> Buy Again </button> 
        </div>
        <div onClick={()=> detailed(index)}>
            <b> {!(item.formData.name) ? "Normal Expense" : item.formData.name  }  - ${item.formData.amount} </b> <br />
            <i> <small> {item.formData.time} </small> </i>
        </div>
        </div>
        </div>
    )})) : "NO Expense Data"
    }

    </div>
    </div>
  )
}

export default Home
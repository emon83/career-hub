import { toast } from "react-hot-toast";
//Add data to localStorage
const addToDb = id => {
    let jobInfo = {}
  
    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('job-info')
    if (storedCart) {
      jobInfo = JSON.parse(storedCart)
    }
  
    // add quantity
    const quantity = jobInfo[id]
    if (quantity) {
      toast.error('You Already Applied This Job! 🔥')
    } else {
      jobInfo[id] = 1
    }
    localStorage.setItem('job-info', JSON.stringify(jobInfo))
  }
  

const getStoredCart = () =>{
    let jobInfo = {}
  
    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('job-info')
    if (storedCart) {
      jobInfo = JSON.parse(storedCart)
    }
    return jobInfo;
}  


export {addToDb, getStoredCart}
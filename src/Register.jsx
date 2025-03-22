import React from 'react'
import { useState} from 'react'
const Register = () => {

  let[state,setstate] = useState({})
  let[error,seterror] = useState({})
  let[submit,setsubmit] = useState(null)
  let getit=(e)=>{
    e.preventDefault()
    validate()
    if(!validate()){
     return false
    }
    else{
      setsubmit({ uname: state.uname, uage: state.uage });
      setstate({ uname: "", uage: "" });
      console.log({ uname: state.uname, uage: state.uage });
      
    }
  }
  let handle = (e)=>{
  let k1 = e.target.name 
  let v1 = e.target.value
  setstate({...state,[k1]:v1})
  seterror({})
  }      
  let validate = ()=>{
    let obj = {}
    let valid = true
    if(!state.uname){
      obj.uname = "PLEASE ENTER THE NAME"
      valid =false
    }
    if(!state.uage){
      obj.uage = "PLEASE ENTER THE EMAIL"
      valid = false 
    }
   
    
    seterror(obj)
    if(!valid){
      return false
    }
    else{
      return true
    }
  }


  return (
    <>
      <div className="container-fluid  speaker p-3 pb-5">
        <div className="row">
          
        </div>
        <div className="container">
          <div className="row text-center ">
            <div className="col-12">
              <h1 style={{ fontWeight: "400" }} className='lh-lg sh '>Register</h1>
              <h4 style={{ fontWeight: "300" }} className='lh-sm sp'>Every year we aim to have an unbelievable time, and this year we'd love it for you to join us. Conference passes only cost $99, one of the best values you'll find.</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
  <div className="row">
    {/* Left Section */}
    <div className="col-8 d-flex flex-column justify-content-center ">
      <h4 className="hh1">Purchase a Conference Pass</h4>
      <h5 className="hh2">$99 per Pass</h5>
      <p className="hh3">
        Purchase your Styles Conference pass using the form to the right.
        Multiple passes may be purchased within the same order, so feel free to
        bring a friend or two along. Once your order is finished, we’ll follow
        up and provide a receipt for your purchase. See you soon!
      </p>
      <h4 className="r">Why Attend?</h4>
      <ul>
        <li className="l">Over twenty world-class speakers</li>
        <li className="l">One full day of workshops and two full days of presentations</li>
        <li className="l">Hosted at The Chicago Theatre, a historical landmark</li>
        <li className="l">August in Chicago is simply amazing</li>
      </ul>
    </div>

    {/* Right Section  */}
    <div className="col-4 mt-5">
      <form action="#" method="get" className='w-75 ' onSubmit={getit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label" >Name</label>
          <p className='text-danger'>{error.uname}</p>
          <input type="text" name='uname' value={state.uname || ""} onChange={handle} className="form-control" placeholder='Full name'/>
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">Email</label>
          <p className='text-danger'>{error.uage}</p>
          <input type="text" name='uage' value={state.uage || ""} onChange={handle} className="form-control" placeholder='email address'/>
        </div>
        <div className="mb-3">
          <label htmlFor="passes">Number of Passes</label>
          <select name="passes" id="passes" className="form-select">
            <option value="one">1</option>
            <option value="two">2</option>
            <option value="three">3</option>
            <option value="four">4</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="comments" className="form-label">Comments</label>
          <p className='text-danger'>{error.comment}</p>
          <textarea rows={4} className="form-control"></textarea>
        </div>
        <div className="mb-3">
          <button type="submit" className='purchase'>PURCHASE</button>
        </div>
      </form>
    </div>
  </div>
</div>
    </>
  )
}

export default Register
import React,{useState,useEffect} from 'react';
import { Controller, useForm } from 'react-hook-form/dist/react-hook-form.ie11'
import Dashboard from './dashboard';
import Demo from './header';



const UserForm=function UserForm(){

    const { register, handleSubmit,errors } = useForm();
    const[userData,setUserData]=useState(localStorage.getItem("data"))
    const [cancel, setCancel] = useState(false);
    const cancelClick = function cancelClick() {
        setCancel(true);
      }

      if (cancel) {
        return <Dashboard/>
      }
    const onSubmit = function onSubmit(data,e) {
        // e.preventDefault();
       
        console.log(data);
        setUserData(localStorage.setItem("MyData",JSON.stringify(data)))
    }
return(

<Demo>
    <div>
    <div className="ui container">
      <div className="ui ">
        <h4 className="ui horizontal divider header">
          <i className="user plus icon"></i>
             Create Users.
          </h4>
        <form className="ui form" onSubmit={(handleSubmit(onSubmit))}>
          <div className="ui grid">
            <div className="ui row stackable two column wide">
              <div className="column">
                <div className="ui grid">
                  <div className="ui one column row wide">
                    <div className="column">
                      <label>Agency Name</label>
                      <div className="ui fluid icon input">
                       
                        <input type="text"
                        id="agencyName"
                        name="adAgencyName"
                        placeholder="Enter Agency Name"
                        ref={register({ required: true })}
                      />
                 
                      </div>
                    </div>
                  </div>
                  {
                    errors.agencyName &&
                    <div className="ui one column row wide errorDiv">
                      <div className="errorTxt column">
                        <i className="red exclamation triangle icon"></i>Agency Name Is Required!!
                      </div>
                    </div>
                  }
                </div>
              </div>
              <div className="column">
                <div className="ui grid">
                  <div className="ui one column row wide">
                    <div className="column">
                      <label>Contact Details</label>
                      <div className="ui fluid icon input">
                      
                     <textarea placeholder="Enter Contact Details" name="agencyContact" ref={register({ required: true})} style={{minHeight:"100px"}} rows="3"></textarea>
                      
                      </div>
                    </div>
                  </div>
                  {
                    errors.Agency_Contact_Details && <div className="ui one column row wide errorDiv">
                      <div className="errorTxt column">
                        <i className="red exclamation triangle icon"></i> Agency Contaict Details is required
               </div>
                    </div>
                  }
                </div>
              </div>
            </div>
          
          <div className="ui row stackable two column wide">
              <div className="column">
                <button className="ui red fluid button">
                  Save
                </button>
              </div>
              <div className="column">
                <button className="ui fluid button" onClick={cancelClick}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  </Demo>
)

} 
export default UserForm;
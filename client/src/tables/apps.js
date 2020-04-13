import React, { useState,useEffect } from 'react'
import UserTable from './UserTable'

import Demo from '../header'
import DeleteModal from './deleteModal'
import { Divider } from 'semantic-ui-react'
import AddModal from './addmodal'
import { GetAllRecords,DeleteRecords, UpdateRecords } from '../service/service'
const App = () => {
  const [data,setData]=useState(null);
  const [deleteModal, setDeleteModal] = useState(false);
 
 const[update,setUpdate]=useState(false);
  // const [currentUser, setCurrentUser] = useState(initialFormState)
const[updatedUser,setUpdatedUser]=useState({})
 
const [deleteUserData,setDeleteUserData]=useState(null);
  const [users, setUsers] = useState(null)
  const [add, setAdd] = useState(false);

  const addUser = (user) => {
    setUpdate(false)
    user.id = users.length + 1
    
    setUsers([...users, user])
    
  }
  const addfunction = () => {
    setAdd(true);
  }

  const closeAddFunction = () => {
    setAdd(false);
  }
  
  const editUser = (id,user)=>{
    setAdd(true);
    setUpdate(user);
   
   
  }
  
  const updateUser = (id,user) => {
    console.log(id)
    UpdateRecords(id,user).then(()=>{
      setAdd(false);
      console.log(user,id);
    }).catch(err=>{
      console.log(err.message)
    })   
  }


  const deleteUser = (id,data) => {
    setDeleteModal(true);
    DeleteRecords(id,data).then((res)=>{
      console.log(res.data);
    })
    console.log(data)
  }
const closeModal=()=>{
  setAdd(false);
}

useEffect(() => {
 
GetAllRecords().then(res=>{
  console.log(res.data.result.rows)
  setData(res.data.result.rows)
  

})


}, [])

// console.log(data)



  return (
    <>{add && <AddModal updateUser={updateUser} update={update} redirect={closeModal}  title="add Employees" positiveActionText={"close"}/>
    }
      {deleteModal && <DeleteModal deleteUser={deleteUser}  title="Delete User" cencelActionText={"Cancel"} content="are you sure you want to Delete" redirect={deleteUser} positiveActionText={"Ok"} />}
      <Demo>
        <div className="ui container">
          <div className="ui ">
          
            <h4 className="ui horizontal divider header">
              
              <i className="user plus icon"></i>
        Student Listing
        </h4>
        <Divider hidden/>
          </div>
        </div>
        <div className="ui grid">
        <div className="ui  two column row wide">
            <div className="column">
              
            </div>
            <div className="column right aligned ">
              
              <button className="ui button primary" onClick={addfunction}>
              <i className="icon add circle"></i>
              Add
                  </button>
              </div>
              </div>
          <div className="ui row stackable one column wide">
            <div className="column">
              <UserTable data={data} deleteUser={deleteUser} editUser={editUser} />
            </div>
            </div>          
        </div>

      </Demo>
    </>
  )
}

export default App;
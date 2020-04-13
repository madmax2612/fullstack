import React,{useState} from 'react';
import { Controller, useForm } from 'react-hook-form/dist/react-hook-form.ie11'
import AddModal from './addmodal';

const TableContent=function TableContent(props){

    const { register, handleSubmit, errors } = useForm({defaultValues: props.currentUser})
    const initialFormState = { id: null, name: '', username: '' }
    const [user, setUser] = useState(initialFormState)  
    const [redirect,setRedirect] =useState(false);

   

    //     if (!data.name || !data.username) {
    //     console.log(props.addUser)    
    //     props.addUser(user)
    //     setUser(initialFormState)
    // }

      

    
   

    const handleInputChange = (event) => {
        const { name, value } = event.target
        
        setUser({ ...user, [name]: value })
    // console.log(user);  
    }


return(
<AddModal>
<>

</>

</AddModal>
)


}
export default TableContent;
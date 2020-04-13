import React,{useState} from 'react'

import { TableRow, TableCell, Table } from 'semantic-ui-react'

const UserTable = (props) => {
 
      
return(
 <>
  
  <Table color='red'>
    <Table.Header>
      <Table.Row>
      <Table.HeaderCell>Sno.</Table.HeaderCell>
         <Table.HeaderCell>Name</Table.HeaderCell>
         <Table.HeaderCell>userName</Table.HeaderCell>
         <Table.HeaderCell>Actions</Table.HeaderCell>
       </Table.Row>
    </Table.Header>
    <Table.Body>
      
        {

        props.data &&
        props.data.map((user,key) => {
          
          return(
            <>
            <Table.Row key={key}>
          <Table.Cell >{user.id}</Table.Cell>
          <Table.Cell >{user.first_name}</Table.Cell>
            <Table.Cell >{user.last_name}</Table.Cell>
            <Table.Cell >{user.email}</Table.Cell>
            <Table.Cell >
              <button className="ui button muted-button" onClick={()=>props.editUser(user.id,user)}>Edit</button>
              <button className="ui button muted-button" onClick={()=>props.deleteUser(user.id,user)}>Delete</button>
            </Table.Cell>
            </Table.Row>
          </>
          )})}
          
          
      
    </Table.Body>
  
    </Table>
  
  </>
)
}
export default UserTable
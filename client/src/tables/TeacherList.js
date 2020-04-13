import React from 'react';
import Demo from '../header';
import { Table, Divider } from 'semantic-ui-react';


const TeacherList=()=>{

return(
<Demo>
  <Divider hidden/>
<Table color='red'>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Subject</Table.HeaderCell>
            <Table.HeaderCell>Hours of Teaching</Table.HeaderCell>
            <Table.HeaderCell>Experience</Table.HeaderCell>

          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>Abele</Table.Cell>
            <Table.Cell>Science</Table.Cell>
            <Table.Cell>17</Table.Cell>
            <Table.Cell>5</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>demla</Table.Cell>
            <Table.Cell>Technology</Table.Cell>
            <Table.Cell>10</Table.Cell>
            <Table.Cell>15</Table.Cell>

          </Table.Row>
        </Table.Body>
      </Table>

</Demo>
)

}
export default TeacherList;
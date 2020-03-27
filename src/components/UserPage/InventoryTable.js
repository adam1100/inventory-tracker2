import React, {Component} from "react";
import MaterialTable from "material-table";
import InventoryItem from "./InventoryItem";

class InventoryTable extends Component {
  constructor(props){
    super(props)
    this.state = {
      items: [
        { id: "1", name: "iPad", description: "2018 64gb", status: "On Loan" },
        { id: "2", name: "Mouse", description: "Logitech wireless", status: "Available" },
        { id: "3", name: "Webcam", description: "Insert description here", status: "Available" }
      ]
    }
  }

  // Neil: I made a different implementation of the table which I think might be easier for us to work with than the other one.
  //       The MaterialTable component has a lot of features that we mightn't need. I've commented it out in in case we decide to use it.
  renderTableData() {
    return this.state.items.map((item) => {
      const { id, name, description, status } = item
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{name}</td>
          <td>{description}</td>
          <td>{status}</td>
          <td><button type="button">Delete</button></td>
        </tr>
      )
    })
  }
   
  render(){
    return (
    <div>
      <h1>Inventory</h1>
      <table id='items' style={{width:"50%"}}>
        <tbody>
          {this.renderTableData()}
        </tbody>
      </table>
    </div>
    
//      <MaterialTable
//        actions={[
//          {
//            icon: 'delete',
//            tooltip: 'Delete',
//            onClick: (event, rowData) => {
//              window.confirm("Are you sure you want to delete " + rowData.name)
//            }
//          }
//        ]}
//        columns={[
//          { title: "Name", field: "name" },
//          { title: "Description", field: "description" },
//          { title: "Status", field: "status" },
//       
//        ]}
//        data={this.state.items}
//        title="Inventory"
//      />
       );
  }
}

export default InventoryTable;

import React, {Component} from "react";
import MaterialTable from "material-table";
import InventoryItem from "../UserInventory/InventoryItem";

class InventoryTable extends Component {
   
    render(){
      return (
      <div style={{ maxWidth: "50%" }}>
        <MaterialTable
          actions={[
            {
              icon: 'delete',
              tooltip: 'Delete',
              onClick: (event, rowData) => {
                window.confirm("Are you sure you want to delete " + rowData.name)
              }
            }
          ]}
          columns={[
            { title: "Name", field: "name" },
            { title: "Description", field: "description" },
         
          ]}
          data={[
            { name: "iPad", description: "2018 64gb" 
              
            }
          ]}
          title="Inventory"
        />
      </div>
      
         );
    }
}

export default InventoryTable;
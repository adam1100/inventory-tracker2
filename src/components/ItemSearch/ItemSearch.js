import React from 'react';
import itemSearchResults from './itemSearchResults';

const itemSearch = (props) => {

    let searchSectionStyle = "search-section--compact";
    if (props.showResult)
        searchSectionStyle = "search-section--expand"
    
    return(
        <div>

            <div className={searchSectionStyle}>
                {!props.showResult ? <p className="search-section--header">Find an Item</p> : [] } 
                {/* Hide paragraph when user searched */}

                <div className="search-bar">
                    <input type="text" onChange = { props.inputChange } />
                    <button onClick = { props.clicked }> Search </button>
                </div> 
            </div>

            {props.showResult ? <SearchResults 
                                results = { props.searchResult } 
                                clicked = { props.clickedItem }
                                tableData = { props.tableData }
                                formHandler = {props.formHandler} 
                                formChanged = {props.formChanged}
                                formInput = {props.formInput}/>
                                : [] }
            {/* Show results when user searched */}
        </div>
    );
}













// const admin = require ('firebase-admin');
// const functions = require('firebase-functions')
    
// admin.initializeApp(functions.config().firebase);

// let db = admin.firestore();

// state = {
//     query: "",
//     data: [],
//     filteredData: []
// };

// handleInputChange = event => {
//     const query = event.target.value;

//     this.setState(prevState => {
//       const filteredData = prevState.data.filter(element => {
//         return element.name.toLowerCase().includes(query.toLowerCase());
//       });

//       return {
//         query,
//         filteredData
//       };
//     });
// };

// getData = () => {
//     let items = db.collectionGroup('rows').where('id', '==', 'query');
//     items.get().then(function(querySnapshot) {
//         querySnapshot.forEach(function(doc) {
//             console.log(doc.id, ' => ', doc.data());
//         });
//     });
// }


// componentWillMount = () => {
//     this.getData();
// }

// const itemSearch = (props)=>{
//     return(
//         <React.Fragment>
//             <div className="item-search">
//                 <input label="Search Item" type="text" value={this.state.query} onChange = { this.handleInputChange } />
//                 <button onClick = { props.clicked }> Search </button>
//             </div>
//         </React.Fragment>
//     )
// }

// export default itemSearch;


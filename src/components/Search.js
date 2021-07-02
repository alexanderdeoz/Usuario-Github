import React from 'react'
import PropTypes from 'prop-types'

class Search extends React.Component {    

constructor(props){
super(props)
this.state={search:''}
}

handleChange=(e)=>{
 this.setState({search:e.target.value})
}

render(){
    const {handleSearch} = this.props
    const {search} = this.state
       return (
        <React.Fragment>
            <div className="search-container">
                <input type="text" className="search-input" onChange={this.handleChange}  value={search}/>

                <button className="search-btn" onClick={()=>handleSearch(search)} >Search</button>
            </div>
        </React.Fragment>
    );
}
}

export default Search;
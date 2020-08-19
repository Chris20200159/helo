import React, { Component } from 'react';

class Dashboard extends Component {
  constructor(){
    super();
    this.state = {
      search: ""
    }
  }

  titleHandler = (e) => {
    this.setState({
      search: e.target.value
    })
  }

  render(){

    return <div className="search-container">
      <form onSubmit={e => {
        this.props.searchPost(e, this.state.search)
        this.setState({search:""})
      }}>
        <input value={this.state.search}
        type="text"
        placeholder="Search by Title"
        onChange={(e) => this.titleHandler(e)}/>
        <button className="icon"><span class="ico ico-mglass"></span></button>
        <button className="reset">Reset</button>
       </form>
    </div>
  }
}

export default Dashboard;
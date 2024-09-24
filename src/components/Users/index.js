import React from "react";

class Users extends React.Component {
  constructor() {
    super();
    this.state = {
      page: 1,
      users: [],
    };
  }

  handleGetUsersData() {
      fetch(
        `https://randomuser.me/api/?page=${this.state.page}&results=10&seed=abc`
      )
        .then((resp) => resp.json())
        .then((data) => {
          this.setState({
            users: data.results,
          });
        });
    }  

  componentDidMount() {
    this.handleGetUsersData();
  }

  handleChangePagination = position => {
    let { page } = this.state;
    page = position === "next" ? page + 1 : page - 1;

    this.setState({ page }, () => {
      this.handleGetUsersData()
    });

    
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Country</th>
            </tr>
          </thead>

          <tbody>
            {this.state.users.map((user,index) => {
              return (
                <tr key={index}>
                <td>{user.name.first}</td>
                <td>{user.name.last}</td>
                <td>{user.phone}</td>
                <td>{user.location.country}</td>
              </tr>
              )
              
            })}
          </tbody>
        </table>
        <div>
            <button disabled={this.state.page===1} onClick={()=>this.handleChangePagination("prev")}>prev</button>
            <span>{this.state.page}</span>
            <button onClick={()=>this.handleChangePagination("next")}>next</button>
        </div>
      </div>
    );
  }
}

export default Users;

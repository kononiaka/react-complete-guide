import { Component } from 'react';
import User from './User';

import classes from './Users.module.css';


class Users extends Component {
  constructor() {
    super();
    this.state = {
      showUsers: true,
      some: "test"
    };
  }

  toggleUsersHandle() {
    this.setState((prevState) => {
      return { showUsers: !prevState.showUsers };
    });
  }

  componentDidUpdate() {
    if (this.props.users.length === 0) {
      throw new Error("No users provided!");
    }
  }

  render() {


    const usersList = <ul>{this.props.users.map((user) => <User key={user.id} name={user.name} ></User>)}</ul>;

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandle.bind(this)}>{(this.state.showUsers) ? "Hide" : "Show"} Users</button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandle = () => {
//     console.log(showUsers);
//     setShowUsers((prevState) => !prevState);
//   };

//   const usersList = <ul>{DUMMY_USERS.map((user) => <User key={user.id} name={user.name}></User>)}</ul>;

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandle}>{(showUsers) ? "Hide" : "Show"} Users</button>
//       {showUsers && usersList}
//     </div>
//   );
// };

export default Users;

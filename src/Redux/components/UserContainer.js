import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { fetchUsers } from '../redux/user/userActions';

function UserContainer({ userData, fetchUsers }) {
  console.log("userData", userData)
  useEffect(() => { fetchUsers() }, [])
  return (
    userData.loading ? (<div>loading...</div>) :
      userData.error ? <div>{userData.error}</div> :
        <div>
          <h2>Users List</h2>
          {userData && userData.users && userData.users.map(user => <p>{user.name}</p>)}
        </div>)
}

const mapStateToProps = (state) => {
  return {
    userData: state.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../Redux/userActions';



const UserContainer = ({userData, fetchUsersData}) => {
    
    useEffect(() => {
        console.log('Use Effect Initiated of User Container', userData);
        fetchUsersData();
        console.log('After', userData);
    },[])

    return (
        userData.loading ? (
            <h2>Loading...</h2>
        ): userData.error ? (
            <h2>{userData.error}</h2>
        ) : (
            <div>
                <h2>User List</h2>
                <div>
                    {
                        userData && userData.users && 
                        userData.users.map( user => <p key={user.id}>{user.name}</p>)
                    }
                </div>
            </div>
        )
    )
    
}

const mapStateToProps = state => {
    return{
        userData: state.users
    }
}

const mapDispatchToProps = dispatch => {
    return{
        fetchUsersData: () => dispatch(fetchUsers())
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
    )(UserContainer)

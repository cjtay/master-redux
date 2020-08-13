import React from 'react';
import { connect } from 'react-redux';
import { login, logout } from '../redux';

const LoginContainer = ({
    loading,
    authenticated,
    userProfile,
    errorMsg,
    login,
    logout,
}) => {
    return (
        <div>
            <h3>Login Status:</h3>
            {authenticated ? <p>auth TRUE</p> : <p>auth FALSE</p>}
            {/* {authenticated ? (
                <>
                    <p>User is logged in</p>
                    <button onClick={logout}>Logout</button>
                </>
            ) : (
                <>
                    <p>User is logged out</p>
                    <button onClick={login}>Login</button>
                </>
            )} */}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: () => dispatch(login()),
        logout: () => dispatch(logout()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);

import React from 'react';
import { connect } from 'react-redux';
import { login, logout } from '../redux';

const LoginContainer = (props) => {
    return (
        <div>
            <h3>Login Status:</h3>

            {props.auth.authenticated ? (
                <>
                    <p>User is logged in</p>
                    <button onClick={props.logout}>Logout</button>
                </>
            ) : (
                <>
                    <p>User is logged out</p>
                    <button onClick={props.login}>Login</button>
                </>
            )}
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

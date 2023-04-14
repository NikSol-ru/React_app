import React from "react";
import { connect } from "react-redux";
import { authApi } from "../../api/api";
import { setAuthUserData } from "../../redux/auth-reduser";
import Header from "./Header";

class HeaderContainer extends React.Component {
  componentDidMount() {
    authApi.getAuthData().then((response) => {
      if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data;
        this.props.setAuthUserData(id, email, login);
      }
    });
  }

  render() {
    return <Header {...this.props}></Header>;
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  };
};

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);

import { connect } from "react-redux";
import {
  followAC,
  setCurrentPageAC,
  setTotalUserCountAC,
  setUsersAC,
  unfollowAC,
} from "../../../redux/users-reduser";
import UsersAPIComponent from "./UsersAPIComponent";

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (user) => {
      dispatch(setUsersAC(user));
    },
    setCurrentPage: (page) => {
      dispatch(setCurrentPageAC(page));
    },
    setTotalUserCount: (totalUsers) => {
      dispatch(setTotalUserCountAC(totalUsers));
    },
  };
};

const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersAPIComponent);

export default UsersContainer;

import { connect } from "react-redux";
import {
  follow,
  setCurrentPage,
  setTotalUserCount,
  setUsers,
  toggleIsFeching,
  unfollow,
} from "../../../redux/users-reduser";
import axios from "axios";
import React from "react";
import Users from "./Users";
import Preloader from "../../common/Preloader/Preloader";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFeching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users/?page=1&count=100`
      )
      .then((response) => {
        this.props.toggleIsFeching(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalUserCount(response.data.totalCount);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFeching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users/?page=${pageNumber}&count=100`
      )
      .then((response) => {
        this.props.toggleIsFeching(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalUserCount(response.data.totalCount);
      });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          users={this.props.users}
          onPageChanged={this.onPageChanged}
          unfollow={this.props.unfollow}
          follow={this.props.follow}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUserCount,
  toggleIsFeching,
})(UsersContainer);

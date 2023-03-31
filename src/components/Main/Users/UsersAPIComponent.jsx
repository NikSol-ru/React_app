import axios from "axios";
import React from "react";
import Users from "./Users";

class UsersAPIComponent extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users/?page=1&count=100`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUserCount(response.data.totalCount);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users/?page=${pageNumber}&count=100`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUserCount(response.data.totalCount);
      });
  };

  render() {
    return (
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        users={this.props.users}
        onPageChanged={this.onPageChanged}
        unfollow={this.props.unfollow}
        follow={this.props.follow}
      />
    );
  }
}
export default UsersAPIComponent;

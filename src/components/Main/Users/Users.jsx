import axios from "axios";
import React from "react";
import c from "./Users.module.css";
import photoAva from "../../../assets/images/man.png";

class Users extends React.Component {
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  }

  render() {
    return (
      <div className={c.users}>
        <h2>Пользователи</h2>
        {this.props.users.map((u) => (
          <div key={u.id} className={c.userContainer}>
            <div className={c.userAvaButton}>
              <img
                src={u.photos.small === null ? photoAva : u.photos.small}
                alt="ava"
                className={c.ava}
              />
              <div>
                {u.followed ? (
                  <button
                    onClick={() => {
                      this.props.unfollow(u.id);
                    }}
                    className={c.buttonFollow}
                  >
                    Удалить из друзей
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.follow(u.id);
                    }}
                    className={c.buttonFollow}
                  >
                    Добавить в друзья
                  </button>
                )}
              </div>
            </div>
            <div className={c.userText}>
              <div className={c.user}>
                <p className={c.fullName}>{u.name}</p>
                <div className={c.location}>
                  <p className={c.city}>{"u.location.city"}</p>
                  <p className={c.country}>{"u.location.country"}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
        <button className={c.usersButton}>Показать еще</button>
      </div>
    );
  }
}

export default Users;

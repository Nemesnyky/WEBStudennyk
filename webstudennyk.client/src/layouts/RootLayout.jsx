import { Outlet, NavLink } from "react-router-dom";
import "./RootLayout.scss";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <div className="Navbar">
          <div className="TimeWrapper">
            {/* Add content here if needed */}
            {/* <div className="Date">30.05.2024</div>
            <div className="Time">12:10</div>
            <img
              src="https://i.postimg.cc/dQx0SrHg/image.png"
              className="Icon"
              alt=""
            /> */}
            {/* <img src="https://i.postimg.cc/pTMfj38Y/image.png" className="Icon" alt="" /> */}
            <NavLink to="/">Стрічка</NavLink>
            <NavLink to="schedule">Розклад</NavLink>
            <NavLink to="tasks">Завдання</NavLink>
            <NavLink to="students">Студенти</NavLink>
            <NavLink to="KNU">KNU</NavLink>
            <NavLink to="userlist">Користувачі</NavLink>
          </div>
          <NavLink to="userprofile">
            <div className="UserProfile">
              <div className="ProfileIconWrapper">
                <div className="ProfileIcon">
                  <div className="Ellipse"></div>
                  <img
                    src="https://i.postimg.cc/JnsSvVvV/image.png"
                    alt="Profile"
                  />
                  <ul className="menuList">
                    <li className="menuItem">
                      <NavLink to="register">Реєстрація</NavLink>
                    </li>
                    <li className="menuItem">
                      <NavLink to="login">Вхід</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </NavLink>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

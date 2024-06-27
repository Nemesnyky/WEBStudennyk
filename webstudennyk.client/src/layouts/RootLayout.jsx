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
          </div>

          
          <div className="UserProfile">
            <div className="ProfileIconWrapper">
              <div className="ProfileIcon">
                <div className="Ellipse"></div>
                <img
                  src="https://i.postimg.cc/JnsSvVvV/image.png"
                  alt="Profile"
                />
              </div>
            </div>
            <div className="ProfileIcon"></div>
          </div>

        </div>
        <nav></nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

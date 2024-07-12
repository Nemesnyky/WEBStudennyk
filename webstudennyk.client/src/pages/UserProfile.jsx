import React, { useEffect, useState } from "react";
import "./UserProfile.scss";

export function UserProfile() {
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserProfile = async () => {
      const token = localStorage.getItem("accessToken");

      if (!token) {
        console.error("Access token not found");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch("/UserProfile", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const profile = await response.json();
          setUserProfile(profile);
        } else {
          console.error("Failed to fetch user profile:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching user profile:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!userProfile) {
    return <div>Error loading profile</div>;
  }

  return (
    <div className="ListWrapper">
      <div className="List">
        <div className="UserPhotoWrapper">
          <img
            className="UserPhoto"
            src={userProfile.photoUrl}
            alt="User Photo"
          />
        </div>
        <div className="bioWrapper">
          <div className="TextWrapper">
            <h2>{userProfile.userName}</h2>

            <a href="">Редагувати профіль</a>
          </div>
          <div className="viewerWrapper">
            <div className="Viewer">
              <p>0 дописів</p>
              <p>Читачі: 83</p>
              <p>Стежить: 131</p>
            </div>
            <a href="">Додати допис</a>
          </div>
          <div className="biography">{userProfile.biography}</div>
        </div>

        {/* <p>Email: {userProfile.email}</p>
      <p>Phone: {userProfile.phoneNumber}</p>
      <p>Biography: {userProfile.biography}</p> */}
      </div>
      <div className="Box">
        <ul>
          <li>
            <a>Tel</a>
          </li>
          <li>
            <a>Inst</a>
          </li>
          <li>
            <a>Inst</a>
          </li>
          <li>
            <a>git</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

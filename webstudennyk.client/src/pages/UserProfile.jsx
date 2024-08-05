import React, { useEffect, useState } from "react";
import axios from 'axios';
import "./UserProfile.scss";

export function UserProfile() {
    const [userProfile, setUserProfile] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem("token");
            if (!token) {
                window.location.href = "/login";
                return;
            }

            try {
                const response = await axios.get('https://localhost:7049/api/userprofile', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setUserProfile(response.data);
            } catch (err) {
                setError(err.message);
                window.location.href = "/login";
            }
        };

        fetchData();
    }, []);

    if (error) {
        return <div>Error loading profile: {error}</div>;
    }

    if (!userProfile) {
        return <div>Loading profile...</div>;
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
                            <p>{userProfile.posts} дописів</p>
                            <p>Читачі: {userProfile.followers}</p>
                            <p>Стежить: {userProfile.following}</p>
                        </div>
                        <a href="">Додати допис</a>
                    </div>
                    <div className="biography">{userProfile.biography}</div>
                </div>
            </div>
            <div className="bookmark">
                <div className="bookmarkCardWrap">
                    <div className="mediaCard">
                        <div className="mediaCardButton">
                            <div class="bookmarkItemButton">
                                <i class="fa fas fa-ellipsis-h"></i>
                            </div>
                        </div>
                    </div>
                    <a href="#" class="bookmarkItemName">
                        папапвапавва івв ів івіів івівівcssd sd sdsd sd sd sddddddddddddd
                    </a>
                </div>
            </div>
        </div>
    );
}

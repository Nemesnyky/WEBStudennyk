import React, { useEffect, useState } from "react";

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
        <div>
            <h2>Hello, {userProfile.userName}</h2>
            <img src={userProfile.photoUrl} alt="User Photo" />
            <p>Email: {userProfile.email}</p>
            <p>Phone: {userProfile.phoneNumber}</p>
            <p>Biography: {userProfile.biography}</p>
        </div>
    );
}

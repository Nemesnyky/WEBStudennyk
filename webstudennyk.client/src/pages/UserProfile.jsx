import React, { useEffect, useState } from "react";

export function UserProfile() {
  const [userName, setUserName] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserName = async () => {
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
          const name = await response.text();
          setUserName(name);
        } else {
          console.error("Failed to fetch user name:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching user name:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserName();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Hello, {userName}</h2>
    </div>
  );
}

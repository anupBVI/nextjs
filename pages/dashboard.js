import { useEffect, useState } from "react";

function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    async function fetchDashboardData() {
      const response = await fetch(`http://localhost:4000/dashboard`);
      const data = await response.json();
      setDashboardData(data);
      setIsLoading(false);
    }
    fetchDashboardData();
  }, []);

  if (isLoading) {
    return <h2>Loading . . . . . . . . . . . </h2>;
  }
  return (
    <div>
      <h2>Dashboard</h2>
      <h3>Posts : {dashboardData.posts}</h3>
      <h3>Likes : {dashboardData.likes}</h3>
      <h3>Followers : {dashboardData.followers}</h3>
      <h3>Followings : {dashboardData.followings}</h3>
    </div>
  );
}

export default Dashboard;

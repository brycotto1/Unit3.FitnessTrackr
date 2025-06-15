import { useEffect, useState } from "react";
import { useApi } from "../api/ApiContext";
import { Activity } from "./Activity";
import { useAuth } from "../auth/AuthContext";
import useMutation from "../api/useMutation";
import { ActivityForm } from "./ActivityForm";

export default function ActivitiesPage() {
  const {request} = useApi();
  const {token} = useAuth();

  const [activityList, setActivityList] = useState([]);
  
  useEffect(() => {
    const listActivities = async () => {
      const activityList = await request("/activities");
      setActivityList(activityList);
    }
    listActivities();
  }, [])

  return (
    <>
      <h1>Activities</h1>
      <ul>
        {activityList.map((activity) => {
          return <Activity activity={activity}/>
        })}
      </ul>
      {token ? (<ActivityForm />) : (<></>)}
    </>
  );
}

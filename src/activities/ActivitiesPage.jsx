import { useEffect, useState } from "react";
import { useApi } from "../api/ApiContext";
import { Activity } from "./Activity";
import { useAuth } from "../auth/AuthContext";
import { ActivityForm } from "./ActivityForm";

import useQuery from "../api/useQuery";

export default function ActivitiesPage() {
  const {data} = useQuery(`/activities`, `activities`);
  const {token} = useAuth();

  return (
    <>
      <h1>Activities</h1>
      <ul>
        {data.map((activity) => {
          return <Activity activity={activity}/>
        })}
      </ul>
      {token ? (<ActivityForm />) : (<></>)}
    </>
  );
}

import useMutation from "../api/useMutation";
import { useAuth } from "../auth/AuthContext";

export const Activity = ({activity}) => {
  const {token, userID} = useAuth();
  
  const tryDelete = () => {
    if(activity.creatorId === userID)
      {
        useMutation("DELETE", `activities/${activity.id}`, )
      }
  }

  return(
    token ? (
      <>
        <li>{activity.name}</li>
        <button onClick={tryDelete}>Delete</button>
      </>
    ) : 
    (
      <li>{activity.name}</li>
    )
  ) 
}
import useMutation from "../api/useMutation";
import { useAuth } from "../auth/AuthContext";

export const Activity = ({activity}) => {
  const {token, userID} = useAuth();
  const {mutate} = useMutation(`DELETE`, `/activities/${activity.id}`, [`activities`]);
  
  const tryDelete = () => {
    if(activity.creatorId === userID)
      {
        mutate();
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
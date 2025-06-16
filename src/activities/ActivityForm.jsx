import useMutation from "../api/useMutation";

export const ActivityForm = () => {
    
  const {mutate} = useMutation(`POST`, `/activities`, [`activities`]);

  const trySubmit = (formData) =>{
    const actName = formData.get("actName");
    const actDesc = formData.get("actDesc");
    const newActivity = {actName, actDesc};
    mutate(newActivity);
  }

  return (
    <form action={trySubmit}>
      <h2>Add a new activity</h2>
      <label for="actName">
        Name:      
        <input type="text" id="actName" name="actName" />
      </label>  
      <label for="actDesc">
        Description:
        <input type="text" id="actDesc" name="actDesc" />        
      </label>
      <button>Submit</button>
    </form>
 )
}
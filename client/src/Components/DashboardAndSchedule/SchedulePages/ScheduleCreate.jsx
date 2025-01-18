import { useState } from "react"

export function ScheduleCreate() {
  const [schedulerName, setSchedulerName] = useState("")
  const [teamMember, setTeamMember] = useState([])
  const [chore, setChore] = useState([])

  const addNewTeamMember = () => {
    setTeamMembers((current) => [...current, teamMember])
  }
  const addNewChores = () => {
    setTeamMembers((current) => [...current, chore])
  }
  return (
    <>
      <form className="scheduleCreate">
        <input
          onChange={(e) => setSchedulerName(e.target.value)}
          value={schedulerName}
          placeholder="Scheduler Name"
        ></input>
        <input
          onChange={(e) => setTeamMember(e.target.value)}
          value={teamMember}
          placeholder="Team Member Name"
        ></input>
         <button onClick={addNewTeamMember}></button>
        <p>{teamMember}</p>
        <button type="submit">Submit</button>
         <input
          onChange={(e) => addNewChores(e.target.value)}
          value={chore}
          placeholder="Chore Name"
        ></input>
        <button onClick={addNewTeamMember}></button>
        <p>{teamMember}</p>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

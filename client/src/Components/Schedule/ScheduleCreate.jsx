import { useState } from "react"

export function ScheduleCreate() {
  const [schedulerName, setSchedulerName] = useState("")
  const [teamMembers, setTeamMembers] = useState([])
  const [teamMember, setTeamMember] = useState("")

  const addNewTeamMember = () => {
    setTeamMembers((current) => [...current, teamMember])
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
        <p>{teamMembers}</p>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

import { useState } from "react"
import axios from "axios"

export function CreateAccount() {
  const [userBody, setUserBody] = useState({
    name: "",
    username: "",
    password: "",
  })

  const handleChange = (event) => {
    const { name, value } = event.target

    let userBodyObj = { ...userBody }
    userBodyObj[name] = value

    setUserBody(userBodyObj)
    console.log(userBodyObj)
  }

  const handleCreate = async () => {
    const { username, password } = userBody

    try {
      await axios.post("https://fancychores.com/account", { username, password })
      console.log("Post Successful")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <form>
        <input
          className="username"
          name="username"
          onChange={handleChange}
          value={userBody.username}
          required
          placeholder="username"
        ></input>
        <input
          className="password"
          name="password"
          onChange={handleChange}
          value={userBody.password}
          required
          placeholder="password"
        ></input>
        <button onSubmit={handleCreate}>Create</button>
      </form>
    </>
  )
}

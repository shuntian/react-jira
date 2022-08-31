import React, { useEffect, useState } from "react";
import { cleanObject } from "utils";
import * as qs from 'qs';
import List from "./list";
import SearchPanel from "./search-panel";

const apiURL = process.env.REACT_APP_API_URL;
export default function ProjectList() {
  
  const [param, setParam] = useState({name: '', personId: ''});
  const [users, setUsers] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(`${apiURL}/users`).then(async response => {
      setUsers(await response.json());
    })
  }, [])
  
  useEffect(() => {
    fetch(`${apiURL}/projects?${qs.stringify(cleanObject(param))}`).then(async response => {
      setProjects(await response.json());
    })
  }, [param])

  return (
    <div style={{display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
      <SearchPanel param={param} setParam={setParam} users={users}/>
      <List projects={projects} users={users}/>
    </div>
  )
}
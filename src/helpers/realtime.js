import { Firebase } from "./firebase";
require("firebase/database");

export function getProjects(project) {

  return Firebase.database().ref('projects'+project).once('value')
}

export function getInterests(int) {

  return Firebase.database().ref('interests'+int).once('value')
}

import axios from "axios";

const api = axios.create({
    baseURL:"http://localhost:3000",
    withCredentials:true
})

export async function createNote(subject,task){
    const response = await api.post("/api/notes/note",{
        subject,
        task
    })
    return response.data
}

export async function getAllNotes(){
    const response = await api.get("/api/notes/get-notes")
    return response.data
}

export async function deleteNotes(id){
    const response = await api.delete(`/api/notes/delete/${id}`)
    return response.data
}

export async function completeTask(id){
    const response = await api.patch(`/api/notes/complete/${id}`)
    return response.data
}
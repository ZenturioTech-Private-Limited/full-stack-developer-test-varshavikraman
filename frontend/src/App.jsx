import { useEffect } from 'react';
import { useState } from 'react'

function App() {
  const [note,setNote] = useState('')
  const [viewNote, SetviewNote] = useState([])

  const handleAddNOte = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://api:5000/notes",{
      method:'POST',
      credentials:"include",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        note
      })
    })

    if (!res.ok) {
      throw new Error("Failed to added note")
    }

    alert("Note added Successfully")
    setNote('')
    } catch (error) {
      console.error("Error in Adding note:",error);
      alert(error)
    }  
  }

  useEffect(()=>{
    const fetchNote = async () => {
      try {
        const res = await fetch("http://api:5000/notes")
        if (!res.ok) {
          throw new Error("Failed to fetch note")
        }
        const data = await res.json()
        SetviewNote(data.data)
    } catch (error) {
        console.error("Error in fetching:",error);
        alert(error)
    }
    }
    fetchNote();
  },[handleAddNOte])
  return (
    <>
      <div>
        <h1>Add Note</h1>
          <form action="" onSubmit={handleAddNOte}>
            <div>
              <label htmlFor="">Content</label>
              <input type="text" />
            </div>
            <button type='submit'>Add Note</button>
          </form>
      </div>
      <div>
        {viewNote.map((note)=>{
          <div key={note._id}>
            <p>{note.note}</p>
          </div>
        })}
      </div>
    </>
  )
}

export default App

import React, { useState, useEffect } from 'react'
import { Pencil, Trash2, Save, XCircle } from "lucide-react"
import axios from "axios"

const AppPage = () => {

  const [text, setText] = useState("");
  const [quotes, setQuotes] = useState([]);
  const [editingId, setEdintingId] = useState(null);
  const [editingText, setEdintingText] = useState("");

  // GET Method
  const getQuotes = async () => {
    const res = await axios.get("http://localhost:4000/api/quotes");
    setQuotes(res.data)
  }

  // POST Method
  const handleAdd = async () => {

    if (!text.trim()) {
      alert("Fill the quotes")
    } else {
      await axios.post("http://localhost:4000/api/quotes", { text });
      setText("");
      getQuotes();
    }
  }

  // PUT Method
  const startEdit = (id, text) => {
    setEdintingId(id);
    setEdintingText(text);
  }

  // PUT Method
  const handleUpdate = async () => {
    if (!editingText.trim()) {
      alert("Fill the quotes to edit");
    } else {
      await axios.put(`http://localhost:4000/api/quotes/${editingId}`, {
        text:editingText
      });

      setEdintingId(null);
      setEdintingText("");
      getQuotes();
    }

  }

  // DELETE Method
  const handleDelete = async (id) => {
    if (confirm("Are you sure?")) {
      await axios.delete(`http://localhost:4000/api/quotes/${id}`);
      getQuotes();
    }
  }

  const handleCancel = () => {
    setEdintingId(null);
    setEdintingText("");
  }

  useEffect(() => {
    getQuotes();
  }, []);

  return (
    <>
      <div className='min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 py-12 px-4 md:px-10'>
        <h1 className='text-4xl font-bold text-center mb-10 text-[#6f36e8]'>My Quotes App</h1>

        {/* Create Form */}
        <div className='max-w-xl mx-auto flex gap-4 mb-10'>
          <input type="text" placeholder='Type your quotes...' className='w-full px-4 py-2 rounded-md border boder-gray-300 shadow-sm' onChange={(e) => setText(e.target.value)}
          value={text} />
          <button className='bg-[#6f36e8] text-white px-6 py-2 rounded-md hover:bg-[#5c2ec4]' onClick={handleAdd}>Add</button>
        </div>

        {/* Quotes List */}
        <div className='max-w-xl mx-auto space-y-4'>
          {quotes.map((q) => (
            <div key={q._id} className='bg-white shadow-md rounded-lg p-4 flex flex-col'>
              {editingId === q._id ? (
                <div className='flex gap-2'>
                  <input type="text"
                    value={editingText}
                    onChange={(e) => setEdintingText(e.target.value)}
                    className='w-full px-3 py-2 rounder-md border' />

                  <div className='flex gap-2'>
                    <button className='bg-green-500 text-white px-3 py-2 rounded-md flex items-center gap-1'
                      onClick={handleUpdate}>Save</button>
                    <button className='bg-gray-500 text-white px-3 py-2 rounded-md flex items-center gap-1'
                      onClick={handleCancel}>Cancel</button>
                  </div>
                </div>
              ) : (
                <div className='flex justify-between w-full items-center'>
                  <p>{q.text}</p>
                  <div className='flex gap-3'>
                    <button className='text-blue-500 hover:text-blue-800 flex items-center gap-1' onClick={() => startEdit(q._id, q.text)}>
                      <Pencil size={16} /> Edit
                    </button>
                    <button className='text-red-500 hover:text-red-800 flex items-center gap-1' onClick={() => handleDelete(q._id)}>
                      <Trash2 size={16} /> Delete
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default AppPage
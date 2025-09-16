import React, { useState } from 'react'

const AppPage = () => {

  const [text, setText] = useState("");
  const [quotes, setQuotes] = useState([
    { _id: "1", text: "Be Yourself; everyone else is already taken." },
    { _id: "2", text: "Life is what happen when you're busy making a plans." }
  ]);
  const [editingId, setEdintingId] = useState(null);
  const [editingText, setEdintingText] = useState("");

  return (
    <>
      <div className='min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 py-12 px-4 md:px-10'>
        <h1 className='text-4xl font-bold text-center mb-10 text-[#6f36e8]'>My Quotes App</h1>

        {/* Create Form */}
        <div className='max-w-xl mx-auto flex gap-4 mb-10'>
          <input type="text" placeholder='Type your quotes...' className='w-full px-4 py-2 rounded-md border boder-gray-300 shadow-sm' />
          <button className='bg-[#6f36e8] text-white px-6 py-2 rounded-md hover:bg-[#5c2ec4]'>Add</button>
        </div>

        {/* Quotes List */}
        <div className='max-w-xl mx-auto space-y-4'>
          {quotes.map((q) => (
            <div key={q._id} className='bg-white shadow-md rounded-lg p-4 flex flex-col'>
              <div className='flex justify-between w-full items-center'>
                <p>{q.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default AppPage
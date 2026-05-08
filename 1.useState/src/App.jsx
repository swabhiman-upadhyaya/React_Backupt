import React, { useEffect, useState } from 'react'
import Card from './components/Card';

const App = () => {
  const [Name, setName] = useState('')
  const [Url, setUrl] = useState('')
  const [Role, setRole] = useState('')
  const [Desc, setDesc] = useState('')

  const [Edit, setEdit] = useState(null)

  const savedLocalData = JSON.parse(localStorage.getItem("postData") || "[]")
  const [AllPost, setAllPost] = useState(savedLocalData);

  const submitHandler = (e) => {
    e.preventDefault()

    if (Edit != null) {
      console.log(Edit)
      const copy = [...AllPost]
      copy[Edit] = { Name, Url, Role, Desc }
      setAllPost(copy)
      setEdit(null)
    }

    else {
      const allPostCopy = [...AllPost];
      allPostCopy.push({ Name, Url, Role, Desc })

      setAllPost(allPostCopy)
    }

    setName('')
    setUrl('')
    setRole('')
    setDesc('')
  }

  const deleteHandler = (idx) => {
    const allPostCopy = [...AllPost]
    allPostCopy.splice(idx, 1);
    setAllPost(allPostCopy)
  }



  useEffect(() => {
    localStorage.setItem("postData", JSON.stringify(AllPost))
  }, [AllPost])

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-start p-4 gap-6">

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 w-full max-w-md">

        {/* Header */}
        <div className="mb-6">
          <div className="w-11 h-11 rounded-full bg-blue-50 flex items-center justify-center mb-3">
            <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h2 className="text-lg font-semibold text-gray-900">Create user</h2>
          <p className="text-sm text-gray-500 mt-1">Fill in your profile details below</p>
        </div>

        <form onSubmit={submitHandler} className="space-y-4">

          {/* Name */}
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1.5 tracking-wide">
              Full name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              value={Name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition"
            />
          </div>

          {/* URL */}
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1.5 tracking-wide">
              Profile URL
            </label>
            <input
              type="text"
              placeholder="https://your-profile.com"
              value={Url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition"
            />
          </div>

          {/* Role */}
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1.5 tracking-wide">
              Job role
            </label>
            <input
              type="text"
              placeholder="e.g. Frontend Developer"
              value={Role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1.5 tracking-wide">
              Description
            </label>
            <textarea
              placeholder="Tell us about yourself..."
              value={Desc}
              onChange={(e) => setDesc(e.target.value)}
              rows={3}
              className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition resize-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full mt-2 py-2.5 bg-gray-900 hover:bg-gray-700 text-white text-sm font-medium rounded-xl transition active:scale-95"
          >
            Create user
          </button>

        </form>
      </div>

      <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pb-6">

        {AllPost.map((post, idx) => (
          <Card
            key={idx}
            post={post}
            idx={idx}
            deleteHandler={deleteHandler}
            setEdit={setEdit}
            setName={setName}
            setUrl={setUrl}
            setRole={setRole}
            setDesc={setDesc}
          />
        ))}
        
      </div>

    </div>
  )
}

export default App
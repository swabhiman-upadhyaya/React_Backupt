import React from 'react'

const Card = ({
  post,
  idx,
  deleteHandler,
  setEdit,
  setName,
  setUrl,
  setRole,
  setDesc
}) => {
  const { Name, Url, Role, Desc } = post

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-5 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-200 w-full">

      <img
        src={Url}
        alt={Name}
        className="w-20 h-20 rounded-full object-cover border-2 border-gray-100 mb-4"
      />

      <p className="text-base font-semibold text-gray-900 mb-0.5">
        {Name}
      </p>

      <span className="text-xs font-medium text-blue-500 bg-blue-50 px-2.5 py-0.5 rounded-full mb-3">
        {Role}
      </span>

      <p className="text-sm text-gray-500 leading-relaxed mb-5 line-clamp-3">
        {Desc}
      </p>

      <div className="flex gap-2 w-full">
        <button
          onClick={() => {
            setName(Name)
            setUrl(Url)
            setRole(Role)
            setDesc(Desc)
            setEdit(idx)
          }}
          className="flex-1 py-2 text-sm font-medium text-blue-500 border border-blue-100 rounded-xl bg-blue-50 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-150 active:scale-95"
        >
          Edit
        </button>

        <button
          onClick={() => deleteHandler(idx)}
          className="flex-1 py-2 text-sm font-medium text-red-500 border border-red-100 rounded-xl bg-red-50 hover:bg-red-500 hover:text-white hover:border-red-500 transition-all duration-150 active:scale-95"
        >
          Remove
        </button>
      </div>

    </div>
  )
}

export default Card
export default function SearchSection({ searchFunction, setSearchParams, searcParams }) {
  const handleChange = (e) => {
    const { name, value } = e.target
    setSearchParams({
      ...searcParams,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSearchParams({
      firstName: '',
      lastName: '',
      email: '',
      cellPhone: '',
      landLine: ''
    })
    searchFunction()
    //on search filter array
  }
  return (
    //add border for debugging border-2
    <div className="min-h-24 min-w-full relative top-10">
      <form onSubmit={handleSubmit} className="flex justify-between mx-24">
        <div className="flex flex-col">
          <label className="text-md font-light pb-1.5 text-slate-100">First Name:</label>
          <input
            className="rounded-md w-52 px-1 py-1.5 text-md bg-slate-50 "
            type="text"
            name="firstName"
            value={searcParams.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-md font-light pb-1.5 text-slate-100">Last Name:</label>
          <input
            className="rounded-md w-52 px-1 py-1.5 text-md bg-slate-50 "
            type="text"
            name="lastName"
            value={searcParams.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-md font-light pb-1.5 text-slate-100">Email:</label>
          <input
            className="rounded-md w-52 px-1 py-1.5 text-md bg-slate-50 "
            type="email"
            name="email"
            value={searcParams.email}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-md font-light pb-1.5 text-slate-100">Cell Phone:</label>
          <input
            className="rounded-md w-52 px-1 py-1.5 text-md bg-slate-50 "
            type="tel"
            name="cellPhone"
            value={searcParams.cellPhone}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-md font-light pb-1.5 text-slate-100">Landline:</label>
          <input
            className="rounded-md w-52 px-1 py-1.5 text-md bg-slate-50 "
            type="tel"
            name="landLine"
            value={searcParams.landLine}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="bg-slate-50 h-8 rounded-md px-3 self-center relative top-3 text-md text-purple-950 font-semibold"
        >
          Search
        </button>
      </form>
    </div>
  )
}

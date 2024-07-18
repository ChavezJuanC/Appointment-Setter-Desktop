import { formatPhoneNumber } from '../../global-functions/formats'

export const ContactsTab = ({ data, setBooking, setId, setName }) => {
  const tabs = data.map((element) => (
    <div
      className="px-8 py-3 mx-6 bg-purple-100 rounded-md flex justify-between my-2"
      key={element._id}
    >
      <div className="flex">
        <div className="text-base font-semibold text-black">Name:</div>
        <div className="text-base text-slate-950 px-1">
          {element.lastName}, {element.firstName}
        </div>
      </div>
      <div className="flex">
        <div className="text-base font-semibold text-black">Cell Phone:</div>
        <div className="text-base text-slate-950 px-1">{formatPhoneNumber(element.cellPhone)}</div>
      </div>
      <div className="flex">
        <div className="text-base font-semibold text-black">Email:</div>
        <div className="text-base text-slate-950 px-1">{element.email}</div>
      </div>
      <div>
        <button
          className="bg-white text-purple-950 font-semibold px-4 py-1 rounded-md"
          onClick={() => {
            setId(element._id)
            setName(`${element.lastName}, ${element.firstName}`)
            setBooking(true)
          }}
        >
          Book
        </button>
      </div>
    </div>
  ))

  const NoResults = () => {
    return (
      <div className="flex justify-center items-center min-h-full border-2">
        <div className="text-gray-300 font-semibold text-center text-2xl">No results</div>
      </div>
    )
  }

  return <div className="pt-1 h-full">{data && data.length > 0 ? <>{tabs}</> : <NoResults />}</div>
}

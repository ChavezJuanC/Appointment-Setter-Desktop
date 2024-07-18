export default function TestComp() {
  const fetchData = async () => {
    try {
      const res = await fetch('http://localhost:7000/contacts/all')
      const data = await res.json()
      console.log(data)
    } catch (error) {
      console.error('Error fetching data: ', error)
    }
  }

  return (
    <div>
      <button
        onClick={() => {
          console.log('Testing 123...')
          fetchData()
        }}
      >
        test
      </button>
    </div>
  )
}

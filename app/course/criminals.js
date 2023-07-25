export default () => {
  const criminals = [...new Array(100).keys()]
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap">
        {criminals.map((item, index) => (
          <div key={index}>{item + 1}</div>
        ))}
      </div>
    </div>
  )
}

export default function Tricks() {
  return (
    <div className="h-screen grid place-content-center bg-slate-900 text-6xl text-white">
      <ul className="list-decimal [&>li]:bg-yellow-500 [&>:not([hidden])~:not([hidden])]:mt-4">
        <li>calc</li>
        <li>color</li>
        <li>child</li>
        <li>nth-child</li>
        <div>
          <ul className="list-disc">
            <li>11111111</li>
            <li>22222222</li>
          </ul>
        </div>
      </ul>
    </div>
  )
}

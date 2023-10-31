export default function Page() {
  async function handleSubmit(formData: FormData) {
    'use server'
    console.log(formData)
  }

  return (
    <div className="grid bg-slate-900 min-h-screen place-content-center">
      <div className="text-6xl">
        <form className="flex flex-col" action={handleSubmit}>
          <input type="text" name="email" />
          <input type="password" name="password" />
          <button type="submit" className="text-white">
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

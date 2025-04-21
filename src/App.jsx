import './App.css'

export default function App() {
  function handleClick () {
    document.documentElement.classList.toggle('dark');
  }

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className="text-3xl font-bold underline">Hello World</h1>
      <button className='p-1 bg-button dark:bg-dark-button rounded-md' onClick={handleClick}>Click Me</button>
    </div>
  )
}
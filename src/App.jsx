import { Header } from './components/Header'
import { NotesListPages } from './pages/NotesListPages'
import { Route, Routes } from 'react-router-dom'
import { NotePage } from './pages/NotePage'

function App() {

  return (
    <>
      <div className="w-9/12 md:w-7/12 lg:w-6/12 mx-auto shadow-2xl shadow-gray-800 rounded-lg p-5 bg-[#2C5360] mt-10">
        <Header />
        <Routes>
          <Route path="/" element={<NotesListPages />} />
          <Route path="/:noteId" element={<NotePage />} />
        </Routes>
      </div>
    </>
  )
}

export default App

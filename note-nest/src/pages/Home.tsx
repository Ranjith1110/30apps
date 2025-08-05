import NoteForm from "@/components/NoteForm"
import NoteList from "@/components/NoteList"

const Home = () => {
  return (
    <> 
        <div className='flex items-center justify-center px-4 py-8 bg-gray-50 max-w-screen-sm mx-auto w-full rounded-lg'>
            <div className='w-full'>
                <h2 className='text-3xl font-bold text-center mb-6'>📒 Note Nest</h2>
                <div className="p-6 bg-white rounded-lg shadow">
                    <NoteForm />
                    <NoteList />
                </div>
            </div>
        </div>
    </>
  )
}

export default Home
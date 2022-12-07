import { useState, useEffect } from 'react'
import { useSearchParams, useParams } from 'react-router-dom/dist'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../firebase.config'
import { toast } from 'react-toastify'

const Contact = () => {
  const [message, setMessage] = useState('')
  const [landlord, setLandLord] = useState(null)
  const [searchParams, setSearchParams] = useSearchParams()

  const params = useParams()

  useEffect(() => {
    const getLandlord = async () => {
      const docRef = doc(db, 'users', params.landlordId)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        setLandLord(docSnap.data())
        console.log(params.landlordId)
      } else {
        toast.error('Could not get ladlord Data!')
      }
    }
    getLandlord()
  }, [params.landlordId])

  const onChange = (e) => {
    setMessage(e.target.value)
  }

  return (
    <div className='pageContainer'>
      <header>
        <p className='pageheader'> Contact Landlord</p>
      </header>

      {landlord !== null && (
        <main>
          <div className='contactLandlord'>
            <p className='landlordName'>Contact {landlord?.name}</p>
          </div>
          <form className='messageForm'>
            <div className='messageDiv'>
              <label htmlFor='message' className='messageLabel'>
                Message
              </label>
              <textarea
                name='message'
                id='message'
                className='textarea'
                value={message}
                onChange={onChange}
              ></textarea>
            </div>

            <a
              href={`mailto:${landlord.email}?Subject=${searchParams.get(
                'listingName'
              )}&body=${message}`}
              target='_blank'
              rel='nonreferrer'
            >
              <button type='button' className='primaryButton'>
                Send Message
              </button>
            </a>
          </form>
        </main>
      )}
    </div>
  )
}

export default Contact

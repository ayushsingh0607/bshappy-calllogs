import './calls.css'
import All from '../../components/all/All'
import Calling from '../../components/calling/Calling'
import Navbar from '../../components/Navbar/Navbar'
import Contacts from '../../components/contacts/Contacts'

const Calls = () => {
  return (
    <>
      <Navbar />
      <div className="comp">
          <Calling />
          <All />
          <Contacts />
      </div>
    </>
  )
}

export default Calls
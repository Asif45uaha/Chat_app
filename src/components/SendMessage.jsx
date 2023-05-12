import { useState } from "react"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { db } from "../firebase"
import { UserAuth } from "../context/AuthContext"

const SendMessage = () => {
    const [val, setVal] = useState('')
    const { currentUser } = UserAuth()
    const handleSendMessage = async (e) => {
        e.preventDefault()
        if (val.trim() === '') {
            alert("Enter A Valid Message")
            return
        }
        const { uid, displayName, photoURL } = currentUser
        await addDoc(collection(db, "messages"), {
            text: val,
            name: displayName,
            avatar: photoURL,
            createdAt: serverTimestamp(),
            uid,
        })
        setVal("")
    }
    return (
        <div className="bg-gray-200 fixed bottom-0 w-full py-10 shadow-lg">
            <form onSubmit={handleSendMessage} className="px-2 containerWrap flex">
                <input className="input w-full focus:outline-none bg-gray-100 rounded-r-none" type="text" value={val} onChange={(e) => setVal(e.target.value)} />
                <button type="submit" className="w-auto bg-gray-500 text-white rounded-r-lg px-5 text-sm">Send</button>
            </form>
        </div>
    )
}
export default SendMessage
import { collection, query, onSnapshot, orderBy, limit } from "firebase/firestore"
import Message from "./Message"
import { useEffect, useState, useRef } from "react"
import { db } from "../firebase"

const ChatBox = () => {
    const messagesEndRef = useRef()
    const [messages, setMessages] = useState([])
    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({
            behavior: "smooth"
        })
    }
    useEffect(scrollToBottom, [messages])
    useEffect(() => {
        const q = query(collection(db, "messages"), orderBy("createdAt"), limit(50));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const messages = [];
            querySnapshot.forEach((doc) => {
                messages.push({ ...doc.data(), id: doc.id });
            });
            setMessages(messages)
        });
        return () => unsubscribe()
    }, [])
    return (
        <div className="pb-44 pt-20 containerWrap">
            {
                messages.map((message) => (
                    <Message message={message} key={message.id} />
                ))
            }
            <div ref={messagesEndRef}></div>
        </div>
    )
}
export default ChatBox
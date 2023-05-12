import { UserAuth } from "../context/AuthContext"

const Navbar = () => {
    const { currentUser, logOut } = UserAuth()
    const handleLogout = async () => {
        await logOut()
    }
    return (
        <div className="navbar fixed z-10 bg-primary text-primary-content">
            <div className="containerWrap flex justify-between">
                <a className="btn btn-ghost normal-case text-xl" href="/">Chat App</a>
                {/* if currentUser has a value */}
                {
                    currentUser ? <button onClick={handleLogout}>Logout</button> : ""
                }

            </div>
        </div>
    )
}
export default Navbar
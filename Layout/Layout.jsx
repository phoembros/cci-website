import Footer from "../Component/Footer/footer"
import Nav from  "../Component/Navbar/Navbar"

export default function Layout({ children }) {
    return(
        <div className="layout-page">            
            <Nav />
            <div className="main">
                <div className="container">
                    {children}
                </div>
            </div>
            <Footer />
        </div>
    )
}
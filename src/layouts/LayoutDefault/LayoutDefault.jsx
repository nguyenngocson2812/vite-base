import './layoutDefault.scss';
import Footer from './Footer/index.jsx';
import { Outlet } from 'react-router-dom';
import Header from './Header/index.jsx';
function LayoutDefault() {
    return (<>
        <Header />
        <main className="main">
            <Outlet />
        </main>
        <Footer />
    </>)
}

export default LayoutDefault;
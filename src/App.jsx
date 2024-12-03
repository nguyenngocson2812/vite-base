// import lib
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import file
import AppRoutes from './routes';

function App() {
    return (
        <>
            <AppRoutes />
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                closeOnClick
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </>
    );
}
export default App;

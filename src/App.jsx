import TestRedux from './components/TestRedux/TestRedux';
import AppRoutes from './routes';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; // Import CSS


function App() {
  const API_URL = import.meta.env.VITE_API_URL;
  console.log("API_URL: ", API_URL);
  return (<>
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
  </>)
}
export default App;
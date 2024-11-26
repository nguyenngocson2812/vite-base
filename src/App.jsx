import TestRedux from './components/TestRedux/TestRedux';
import AppRoutes from './routes';


function App() {
  const API_URL = import.meta.env.VITE_API_URL;
  console.log("API_URL: ", API_URL);

  return (<>
    <TestRedux />
    {/* <AppRoutes /> */}
  </>)
}
export default App;
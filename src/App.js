import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes.js";

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;

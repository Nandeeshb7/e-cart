 import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Dashboard from "./components/Dashboard";
import CartComponent from "./components/Cart";



function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route index element = {<Dashboard/>}></Route> 
      <Route path='/cart' element = {< CartComponent/>}></Route>
    </Route>
  ))
  return (
    <div className="App">
      {/* <Product /> */}
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

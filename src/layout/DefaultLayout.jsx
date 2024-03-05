import { Outlet } from "react-router-dom"
import Header from "../components"

function DefaulLayout(){

    return(
        <>
        <Header />
        <Outlet />

        </>
  )
}

export default DefaulLayout
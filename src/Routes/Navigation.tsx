import { BrowserRouter, NavLink, Navigate, Route, Routes } from "react-router-dom"
import logo from '../logo.svg'

import { routes } from "./routes"
import { Suspense } from "react"

export const Navigation = () => {
  return (

    <Suspense fallback={<span>Loading...</span>}>

        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={ logo } alt="React logo" />

                    <ul>
                        {
                            routes.map( data=>(
                                <li key={data.to}>
                                    <NavLink to={data.to} className={ ({isActive}) => isActive ? 'nav-active' : '' }>{data.name}</NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </nav>

                <Routes>
                    {
                        routes.map((data)=>(
                            <Route path={data.path} element={ <data.Component />} key={data.to} />
                        ))
                    }
                    <Route path="/*" element={ <Navigate to={ routes[0].to } replace />} />
                </Routes>
                
            </div>
        </BrowserRouter>

    </Suspense>
  )
}

import React from 'react'
import { Outlet } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from '../store/store'
import NavBar from '../navBarPanel';

const RootLayout = ()=> {
    return (
        <>
            <Provider store={store}>
                <NavBar />
                <main>
                    <Outlet />
                </main>

            </Provider>

        </>
    )
}

export default RootLayout
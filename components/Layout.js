import React from 'react'
import { Header } from '.'
import { Footer } from '.'

const Layout = ({ children }) => {
    return (
        <div>
          <Header />
          {children}
          <Footer />
        </div>
      )
}

export default Layout;
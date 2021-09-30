import React from 'react'
import { Spinner } from 'react-bootstrap'

function Loader() {
    return (
        <Spinner
            animation='grow'
            role='status'
            size='sm'
            style={{
                margin:'auto',
                display:'block'
            }}
        >
                <span className='sr-on'></span>
        </Spinner>
    )
}

export default Loader

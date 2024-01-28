import React from 'react'
import './details.css'

const Details = ({ children, summary }) => {
    const open = (e) => {
        e.target.children[0].classList.toggle('open')
    }
    return (
        <div>
            <details className='details' >
                <summary onClick={(e)=>{open(e)}}>
                    <i className="bi bi-plus"></i>
                    {summary}
                </summary>
                {children}
            </details>
        </div>

    )
}

export default Details
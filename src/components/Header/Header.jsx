import React from 'react'
import { createUseStyles } from 'react-jss'

function Header() {
    const useStyles = createUseStyles({
        logo: {
            display: 'flex',
            position: 'relative',
            border: 'none',
            boxShadow: ' 0 4px 8px 0 hsla(0,0%,7%,.5);',
            backgroundImage: ' linear-gradient(90deg,#19398a 12%,#1b4c92 50%,#19398a 89%)',
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            height: '8rem'
        },
        logoImage: {
            margin: '10px',
            padding: '10px',
            width: '8%'
        },
        logoText: {
            display: 'flex',
            marginLeft: '100px',
            position: 'absolute',
            alignItems: 'center',
            height: '20px',
            width: '3%',
        },
        logoTag: {
            color: '#fff',
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
            fontSize: '1.5rem',
            textDecoration: 'none',
            textTransform: 'uppercase',
        },
        '@media only screen and (max-width:640px)': {
            logo: {
                height: '7rem',
          
            },
            logoImage: {
                width: '10%',
                margin: '0',
                padding: '1px'
            },
            logoTag: {
                fontSize: '1.4rem',
                marginLeft: '40px',
                display: 'flex'
            },
        },
        '@media only screen and (min-width:300px) and (max-width: 640px)': {
            logo: {
                height: '4rem',
               
            },
            logoImage: {
                width: '38px',
                margin: '0',
                padding: '1px'
            },
            logoText: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                marginLeft: '4px'
            },
            logoTag: {
                fontSize: '0.84rem'
            }
        }     
    })
const LOGO = require('../../assets/logo.png')
return (
    <>
        <nav className={useStyles().logo}>
            <div >
                <img className={useStyles().logoImage} src={LOGO.default} alt={'Indian Premire League'} />
            </div>
            <div className={useStyles().logoText}>
                <p href="#" className={useStyles().logoTag}>indian premire league</p>
            </div>
        </nav>
    </>
)
}

export default Header

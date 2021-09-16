import { createUseStyles } from "react-jss";

const useCardStyle = createUseStyles({
    container:{
        border:'none',
        margin:'20px',
        padding:'20px',
        position:'relative',
    },
    cardContainer:{
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'center'
    },
    card:{
        width:'20%',
        border:'none',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        margin:'20px',
        outline:'none',
        borderRadius:'15px',
        boxShadow:'16px 13px 6px 1px #b9b1b1b3',
        color:'white',
        textTransform:'capitalize',
        textAlign: "center"
    },
    cardImage:{
        width:'200px',
        height:'200px',
        marginTop:'-30px'
    },
    'chennai-super-kings':{
        background: 'linear-gradient( 136deg,#fdb913,#f85c00)',
     },
    'delhi-capitals':{
        background: 'linear-gradient(136deg ,#004c93,#0358a7)',
     },
    'kings-xi-punjab':{
      background: 'linear-gradient(136deg,#aa4545,#740f0b)',
    },
    'kolkata-knight-riders':{
      background: 'linear-gradient(136deg,#70458f,#3d2057)',
    },
    'mumbai-indians':{
      background: 'linear-gradient( 136deg,#005da0,#003a63)',
   
    },
    'rajasthan-royals':{
      background: 'linear-gradient( 136deg,#2d4d9d,#172e5e)',
    },
    'royal-challengers-bangalore':{
      background: 'linear-gradient(136deg,#000,#464646)',
    },
    'sunrisers-hyderabad':{
        background: 'linear-gradient(136deg,#fb643e,#b81c25)',
    },
    cardDetail:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center'
    },
    title:{
        fontSize: '1.5rem',
        paddingLeft: '30px',
        paddingRight: '30px'
    },
    venue:{
        fontSize:'1rem'
    },
    teamWin:{
        color: '#e2d612',
        background: 'rgba(0, 0, 0, 0.2)',
        borderRadius: '25px',
        paddingLeft: '10px',
        paddingRight: '10px',
        marginTop: '-10px',
        marginBottom: '-10px',
        display: 'flex',
        alignItems: 'center',
        fontSize:'0.8rem'
    },
    noTeamWin:{
        background:'rgba(0,0,0,0)',
        padding:'24px',
        marginTop: '-10px',
        marginBottom: '-10px',
    },
    trophy:{
      paddingLeft:'4px'
    },
    home:{
        fontSize:'1rem'
    },
    '@media  screen and (min-device-width: 768px) and (max-width:1024px)':{
        card:{
            width:'27%'
        },
        cardImage:{
            width:'150px',
            height:'150px',          
        },
    },
    '@media only screen and (max-width:768px) and (min-device-width: 640px)':{
        card:{
            width:'42%',
            display:'flex',
            alignItems: 'center',
            justifyContent: 'flex-start'
        },
        cardImage:{
            width:'150px',
            height:'150px',          
        },
    },
    '@media only screen and (max-width: 640px) and (min-device-width:300px)':{
        card:{
            width:'100%',
            display:'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start'
        },
        cardImage:{
            width:'60px',
            height:'60px',
            margin:'2px',
            padding:'2px'           
        },
        cardDetail:{
            display:'flex',
            alignItems:'flex-start'
        },
        title:{
            fontSize: '1rem',
            paddingLeft: '0',
            paddingRight: '0'
        },
        venue:{
            display:'none'
        },
        teamWin:{
            fontSize:'0.5rem',
            marginTop:'-25px'
        },
        noTeamWin:{
            background:'rgba(0,0,0,0)',
            padding:'0',
            marginTop: '0',
            marginBottom: '0',
        },
        trophy:{
          paddingLeft:'4px'
        },
        home:{
            display:'none'
        }
    }

})

export default useCardStyle;
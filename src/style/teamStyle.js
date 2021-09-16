import { createUseStyles } from "react-jss";

const useTeamStyles =  createUseStyles({
    container:{
        width:'100%',
        border:'none',
        position:'relative',
        display:'flex',
        flexDirection: 'column',
        alignContent: 'center',
    },
    card:{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    'teamPlayer-card':{
        display:'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width:'13%',
        margin:'10px',
        boxShadow: '12px 15px 10px #00000030',
        borderRadius: '10px'
    },
    'teamPlayer-card-image':{
        width:'100%',
        height:'214px',
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px',
        textAlign: 'center',
        color: 'white',
        fontSize: 'xxx-large',
    },
    'chennai-super-kings':{
        width:'100%',
        height:'214px',
        background: 'linear-gradient( 134deg,#fdb913,#f85c00)',
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px',
     },
     'delhi-capitals':{
        width:'100%',
        height:'214px',
        background: 'linear-gradient( 134deg  ,#004c93,#0358a7)',
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px',
     },
     'kings-xi-punjab':{
        width:'100%',
        height:'214px',
        background: 'linear-gradient(134deg,#aa4545,#740f0b)',
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px',
     },
     'kolkata-knight-riders':{
        width:'100%',
        height:'214px',
        background: 'linear-gradient(134deg,#70458f,#3d2057)',
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px',
     },
     'mumbai-indians':{
        width:'100%',
        height:'214px',
        background: 'linear-gradient(134deg,#005da0,#003a63)',
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px',
     },
     'rajasthan-royals':{
        width:'100%',
        height:'214px',
        background: 'linear-gradient(134deg,#2d4d9d,#172e5e)',
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px',
     },
     'royal-challengers-bangalore':{
        width:'100%',
        height:'214px',
        background: 'linear-gradient(134deg,#000,#464646)',
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px',
     },
     'sunrisers-hyderabad':{
        width:'100%',
        height:'214px',
        background: 'linear-gradient(134deg,#fb643e,#b81c25)',
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px',
     },
    'teamPlayer-card-playerDetail':{
        display:'flex',
        flexDirection:'column',
        padding:'10px',
        width:'100%',
        alignItems:'center',
        textAlign:'center'
    },
    
    'teamPlayer-card-playerStat':{
        display:'flex'
    },
    'teamPlayer-card-matches':{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        margin:'5px',
        letterSpacing:'0.2px'
    },
    'teamPlayer-card-viewProfile':{
        textAlign:'center',
        border:'none',
        background:'none',
        fontSize:'large'
    },
    '@media  screen and (min-device-width: 768px) and (max-width:1024px)':{
        'teamPlayer-card':{
            width:'27%',  
        },
    },
    '@media only screen and (max-width:768px) and (min-device-width: 640px)':{
        'teamPlayer-card':{
            width:'46%',  
        },
    },
    '@media only screen and (max-width: 640px) and (min-device-width:300px)':{
        'teamPlayer-card':{
            width:'80%',  
        },
    }
})

export default useTeamStyles
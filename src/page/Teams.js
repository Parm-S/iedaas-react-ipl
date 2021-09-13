
import React from 'react'
import useTeams from '../teamCustomHook/useTeams'
import LOGO_URL from '../helper/Logourl';
function Teams() {
    const [objects] = useTeams();
    const image = LOGO_URL;
    console.log(objects.loading)
    return (
        <div>
            {  
                objects.loading ? 
                <div>loading...</div> 
                : objects.error ? 
                <div>{objects.error}</div> 
                :objects.teams.map(team => {
                    return (
                        <div key={team.id}>
                             <img src={image[team.id].default} />     
                            <p>{team.teamName}</p>
                            <p>{team.venue}</p>
                            <p>{team.winningYears}</p>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Teams

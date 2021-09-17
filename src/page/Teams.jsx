import React, { useCallback } from 'react'
import useApi from '../teamCustomHook/useApi'
import LOGO_URL from '../helper/Logourl';
import URL from '../helper/Url';
import { useHistory } from "react-router-dom";
import { FaTrophy } from "react-icons/fa";
import useCardStyle from '../style/teamsStyle';
function Teams() {
    const classes = useCardStyle();
    const url = URL;
    const teamsData = useApi(url.teams, 'getTeamsData');
    let history = useHistory();
    const clickHandler = useCallback(
        (id) => {
            history.push(`/teams/${id}`);
        }, []
    )
    const image = LOGO_URL;
    return (
        <div className={classes.container}>
            <div className={classes.cardContainer}>
                {
                    teamsData && teamsData.teams.map(team => {
                        return (
                            <div key={team.id} onClick={() => { clickHandler(team.id) }}
                                className={`${classes.card} ${classes[team.id]}`}>
                                <img src={image[team.id].default} alt={team.teamName} className={classes.cardImage} />
                                <div className={classes.cardDetail} >
                                    <h3 className={classes.title}>{team.teamName}</h3>
                                    <p className={classes.venue}>{team.venue}</p>
                                    <p>{
                                        team.winningYears.length ?
                                            (<p className={classes.teamWin}><FaTrophy />
                                                {team.winningYears.map(trophy => {
                                                    return <p className={classes.trophy}>{trophy},</p>
                                                })}
                                            </p>) :
                                            (<p className={classes.noTeamWin}></p>)
                                    }</p>
                                    <p className={classes.home}>Team Home</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div >
    )
}
export default Teams

import React from 'react'
import useApi from '../teamCustomHook/useApi';
import URL from '../helper/Url';
import useTeamStyles from '../style/teamStyle';
import Banner from '../components/Banner';
function Team(props) {
    let inital_url = props.match.url
    let team_url = inital_url.slice(7)
    const url = URL;
    const teamPlayer = useApi(url[team_url]);
    const classes = useTeamStyles();
    return (
        <div className={classes.container}>
            {teamPlayer.loading ?
                <div >{teamPlayer.loading}</div>
                : teamPlayer.error ?
                    <div>{teamPlayer.error}</div>
                    :
                    <>
                        <Banner teamName={team_url} />
                        <div className={classes.card}>
                            {teamPlayer.teams.players.map(player => {
                                return (
                                    <div key={player.id} className={classes[`teamPlayer-card`]}>
                                        <div className={classes[`${team_url}`]} >
                                        <img src={player.image} alt={player.name} className={classes[`teamPlayer-card-image`]}   />
                                        </div>
                                        <div className={classes[`teamPlayer-card-playerDetail`]}>
                                            <p>{player.name}</p>
                                            <div className={classes[`teamPlayer-card-playerStat`]} >
                                                <p className={classes[`teamPlayer-card-matches`]}>{player.stats.matches}<span>Matches</span></p>
                                                <p className={classes[`teamPlayer-card-matches`]}>{player.stats.runs}<span>Runs</span></p>
                                                <p className={classes[`teamPlayer-card-matches`]}>{player.stats.wickets}<span>Wickets</span></p>
                                            </div>
                                            <button className={classes[`teamPlayer-card-viewProfile`]}>View Profile</button>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </>
            }
        </div >
    )
}

export default Team

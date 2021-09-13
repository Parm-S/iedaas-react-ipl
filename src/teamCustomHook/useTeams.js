import { useEffect, useReducer } from 'react'
import axios from 'axios'


const useTeams = () => {
    const initialState = {
        loading: true,
        error: '',
        teams: []
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case 'FETCH_SUCCESS':
                return {
                    loading: false,
                    teams: action.payload,
                    error: ''
                }
            case 'FETCH_ERROR':
                return {
                    loading: false,
                    teams: {},
                    error: 'Some Thing went Wrong'
                }
            default:
                return state
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState)
    async function getTeamsData() 
    {
        await axios.get('https://ipl-t20.herokuapp.com/teams')
            .then(response => {
                dispatch({
                    type: 'FETCH_SUCCESS',
                    payload: response.data
                })
            })
            .catch(error => {
                dispatch({
                    type: 'FETCH_ERROR',
                })
            })
    }

    useEffect(() => {
        getTeamsData();
    }, [])
    return [state]
};

export default useTeams
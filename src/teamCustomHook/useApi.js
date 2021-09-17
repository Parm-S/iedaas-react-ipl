import React, { useEffect, useReducer } from 'react'
import axios from '../helper/Axios'
import Error from '../page/Error';
const useApi = (url, actionType) => {
    const initialState = {
        teams: [],
        data: {
            players: []
        },
        error: ''
    }
    const reducer = (state, action) => {
        switch (action.type) {
            case 'FETCH_SUCCESS':
                return {
                    teams: action.payload,
                }
            case 'PLAYER_FETCH_SUCCESS':
                return {
                    data: action.payload,
                }
            case 'FETCH_ERROR':
                return {
                    teams: {},
                    data: {},
                    error: "something went wrong"
                }
            default:
                return state
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState)
    async function callApiHelper(url) {
        if (url) {
            const response = await axios.get(url)
            return response
        } else {
            dispatch({
                type: 'FETCH_ERROR'
            })
            throw new Error(<Error />)
        }
    }
    function getTeamsData(url) {
        callApiHelper(url).then(response => {
            dispatch({
                type: 'FETCH_SUCCESS',
                payload: response.data
            })
        }).catch(error=>{
            dispatch({
                type: 'FETCH_ERROR'
            })
        })
    }
    function getTeamPlayerData(url) {
        callApiHelper(url).then(response => {
            dispatch({
                type: 'PLAYER_FETCH_SUCCESS',
                payload: response.data
            })
        }).catch(error=>{
            dispatch({
                type: 'FETCH_ERROR'
            })
        })
    }
    const actions = {
        getTeamsData: getTeamsData,
        getTeamPlayerData: getTeamPlayerData
    }
    useEffect(() => {
        actions[actionType](url)
    }, [url, actionType])
    return state
};
export default useApi

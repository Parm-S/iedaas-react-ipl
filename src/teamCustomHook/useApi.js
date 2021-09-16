import React, { useEffect, useReducer } from 'react'
import axios from 'axios'
import Error from '../page/Error';
import Loading from '../helper/Loading';


const useApi = (url) => {
    const initialState = {
        loading: <Loading />,
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
                    error: <Error />
                }
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)
    const { teams, loading, error } = state

    async function getTeamsData(url) {
        await axios.get(url)
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
        getTeamsData(url);
    }, [url])
    return {loading,error,teams}
            
};

export default useApi
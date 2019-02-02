import { CREATE_PROJECT } from "../DifferentActionTypes";


export const createProject = (project) => {
    return (dispatch,getState) => {
        //make async call to database

        dispatch({type: 'CREATE_PROJECT', project})
    }
}
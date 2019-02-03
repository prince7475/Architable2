import { CREATE_INTERVIEW, CREATE_INTERVIEW_ERROR } from "../DifferentActionTypes";


export const createInterview = (interview) => {
    return (dispatch,getState, {getFirebase, getFirestore}) => {
        //make async call to database
        const firestore = getFirestore();

        firestore.collect('Interviews').add({
            ...interview,
            createdAt: new Date()
        }).then( () => {
            dispatch({type: CREATE_INTERVIEW, interview})
        }).catch((err) => {
            dispatch({type: CREATE_INTERVIEW_ERROR, err})
        })
        
    }
}
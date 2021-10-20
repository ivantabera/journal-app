import Swal from 'sweetalert2';

import { getAuth, signInWithPopup, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { googleAuthProvider } from "../firebase/firebase-config";
import { types } from "../types/types";
import { finishLoading, startLoading } from './ui';

export const startLoginEmailPassword = (email, password) => {
    return ( dispatch ) => {
        
        dispatch( startLoading() );

        const auth = getAuth();

        signInWithEmailAndPassword( auth, email, password )
        .then( ( { user } ) => {
            dispatch(
                login( user.uid, user.displayName )
            );

            dispatch( finishLoading() );

        } )
        .catch( e => {
            console.log( e );
            dispatch( finishLoading() );
            Swal.fire(
                'error',
                e.message,
                'error'
            )
        })

    }
}

export const starRegisterWithEmailPasswordName = ( email, password, name ) => {
    return ( dispatch ) => {
        
        const auth = getAuth();
        createUserWithEmailAndPassword( auth, email, password )
        .then( async({ user })  => {
            
            await updateProfile( user, { displayName: name })
            
            dispatch(
                login( user.uid, user.displayName )
            );

        })
        .catch( e => {
            console.log( e );
            Swal.fire(
                'error',
                e.message,
                'error'
            )
        })
    }
}

export const startGoogleLogin = () => {
    return ( dispatch ) => {
        
        const auth = getAuth();
        signInWithPopup(auth, googleAuthProvider)
            .then( ( { user } ) => {
                dispatch( login( user.uid, user.displayName ))
            } );
    }
}

export const login = ( uid, displayName ) => {
    return {
        type: types.login,
        payload: {
            uid,
            displayName
        }
    }
}

export const startLogout = () => {

    return async( dispatch ) => {
        const auth = getAuth();
        await signOut( auth )

        dispatch( logout() )
    }
};

export const logout = () => ({
    type: types.logout
})
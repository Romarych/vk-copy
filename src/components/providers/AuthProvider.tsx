import { getAuth, onAuthStateChanged, Auth } from "firebase/auth";
import { createContext, PropsWithChildren, useEffect, useMemo, useState } from "react";
import { IUser, TypeSetState } from "../../types";
import {users} from '../layout/sidebar/dataUsers'
import { Firestore, getFirestore } from "firebase/firestore";

interface IContext {
    user: IUser | null,
    setUser: TypeSetState<IUser | null>
    ga: Auth
    db: Firestore
}

export const AuthContext = createContext({} as IContext)

type Props = {};
export const AuthProvider: React.FC<PropsWithChildren<Props>> = ({children}) => {
    const [user, setUser] = useState<IUser | null>(null)

    const ga = getAuth()
    const db = getFirestore()

    useEffect(() => {
        const unListen = onAuthStateChanged(ga, authUser => {
            if (authUser) {
                setUser({
                    _id: authUser.uid,
                    avatar: users[1].avatar,
                    name: authUser.displayName || '',
                })
            } else if (!authUser) {
                setUser(null)
            }
        })
        return () => {
            unListen()
        }
    }, [])

    const values = useMemo(() => ({
        user,
        setUser,
        ga,
        db
    }), [user, ga, db])

    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

// useEffect(() => {
//     const unlisten = firebase.auth.onAuthStateChanged(authUser => {
//         authUser ? setAuthUser(authUser) : setAuthUser(null)
//         return () => {
//             unlisten()
//         }
//     }
//     )
// }, [])
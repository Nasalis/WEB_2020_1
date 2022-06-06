import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

import { firebaseConfig } from "../keys/firebase_key";

export default class Firebase {
    constructor() {
        this.app = firebaseConfig;
        this.user = null;
    }

    getFirestoreDatabase() {
        return getFirestore(this.app);
    }

    getAuthentication() {
        return getAuth(this.app)
    }

    getAuthenticateUser() {
        return this.user;
    }

    setAuthenticateUser(user) {
        this.user = user
    }
}
import { User } from "../types/User"

class _UserHandler {
    currentUser : User | null = null;

    constructor() {

    }

    getCurrentUser() : User | null {
        return this.currentUser;
    }

    setCurrentUser(user : User) {
        this.currentUser = user;
    }
}

export const UserHandler = new _UserHandler();
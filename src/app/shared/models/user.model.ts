/**
 * The user model
 */
export class User {
    
        /**
         * The user id
         */
        id: number;
    
        /**
         * The username
         */
        username: string;
    
        /**
         * The user firstName
         */
        firstName: string;
    
        /**
         * The user lastName
         */
        lastName: string;
    
        /**
         * The user email
         */
        email: string;
    
        /**
         * The user plainPassword
         */
        plainPassword: string;
    
        /**
         * The user roles
         */
        roles: string[];
    
        /**
         * Check if user has Author role
         *
         * @returns {boolean}
         */
        isAuthor(): boolean {
            return this.roles.indexOf('ROLE_AUTHOR') !== -1;
        }
    
        /**
         * Check if user has Author role
         *
         * @returns {boolean}
         */
        isAdmin(): boolean {
            return this.roles.indexOf('ROLE_ADMIN') !== -1;
        }
    
    }
    
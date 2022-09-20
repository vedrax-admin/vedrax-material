import { Role } from "../enum/role.enum";

/**
 * The returned User representation for authentication API
 */
export class User {
    /**
     * Username
     */
    username: string = '';

    /**
     * Full name
     */
    fullName: string = '';

    /**
     * User role
     */
    userRole: Role = Role.VISITOR;

    /**
     * The security JWT which will be used in each subsequent request
     */
    token: string = '';
}


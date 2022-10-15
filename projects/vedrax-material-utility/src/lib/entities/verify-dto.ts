/**
 * User credentials DTO
 */
export class VerifyDto {
    /**
     * Email
     */
    email: string = '';

    /**
     * verification code
     */
    verificationCode: string = '';
}
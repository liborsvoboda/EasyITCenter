function getCookie(name): string | null {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : null;
}

export enum Role {
    CONSUMER = 'consumer',
    MANAGER = 'manager',
    ADMIN = 'admin'
}

class UserRoleValidator {
    
    private roles: string[];

    constructor() {
        this.roles = this.getUserRoles();
    }

    public validate(role: Role): boolean {
        return this.roles.indexOf(role) >= 0;
    }

    private getUserRoles(): string[] {
        const rolesStr = getCookie('user-roles');
        if (rolesStr) {
            return rolesStr.split(',');
        }

        return [];
    }
}

const roleValidator = new UserRoleValidator();
export default roleValidator;
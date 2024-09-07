export interface User {
    id: string;
    name: string;
    email: string;
    createdAt: Date;
}

export interface UserProfile extends User {
    bio: string;
    avatarUrl: string;
}

export interface IMenuUser{
    id: number;
    name: string;
}

export interface IGradient{
    id: number;
    color: string;
}

export interface IBoard{
    title: string;
    color: string;
    animation: boolean;
}

export interface IAuth{
    email: string;
    password: string;
}

export interface IReg{
    email: string;
    password: string;
}

export enum HeaderMenuItems{
    PROFILE = 1,
    SETTINGS,
    EXIT
}
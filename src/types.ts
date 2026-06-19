/* eslint-disable @typescript-eslint/no-explicit-any */

interface NAV {
    to: string,
    from: string,
    key: string
}

interface STATE {
    token: string,
    order?: any,
    timestamp?: string,
    navOptions?: NAV
}


export type {STATE}
export interface MovieCreacion {
    name: string,
    gender: string,
    duration: number,
    fkDirector: number
}

export interface Movie {
    pkMovies: number,
    name: string,
    gender: string,
    duration: number,
    fkDirector: number
}


export interface PostCardModel {
    id?: string,
    author: string,
    url?: string,
    image?: string,
    date: string,
    title: string,
    body: string,
    like?: number,
    comments?: string[],
}

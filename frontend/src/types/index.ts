export interface Message{
    id: string,
    content: string,
    sender: "user" | 'ai',
    timestamp:  Date,
    isLoading?: boolean
}
export interface User{
    id: string,
    name: string,
    avatar?: string
}
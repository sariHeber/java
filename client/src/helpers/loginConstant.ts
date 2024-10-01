export interface IMessage {
    title: string,
    content: string,
    icon: string
}
export const USER_DETAILS_ERROR: IMessage = { title: "Oops!,", content: "The username or password is incorrect", icon: "error" }

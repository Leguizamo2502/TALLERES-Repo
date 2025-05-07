export interface CommentModel {
    postId: number;
    id?: number; // opcional para crear
    name: string;
    email: string;
    body: string;
    }
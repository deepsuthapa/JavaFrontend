export interface ContactModel {
    name: string;
    email: string;
    phone?: string;
    category: string;
    subject: string;
    message: string;
    attachment?: File;
}
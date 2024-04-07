export interface Data {
    "title": string;
    "hero": {
        "name": string;
        "subject": string;

        "social": {
            "icon": string;
            "url": string;
        }[];

        "email": string;
        "description": () => string;
        "education": string;
        "photo": string;

        "skills": {
            "name": string;
            "icon": string;
            "percent": string;
        }[];

        "projects": {
            "name": string;
            "imgPath": string;
            "urlWebsite": string;
            "urlRepository": string;
            "langIcons": string[];
        }[];
    };
}

export interface formData {
    email_client: string;
    email_subject: string;
    email_msg: string;
}
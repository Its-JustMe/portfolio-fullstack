export interface Data {
    "title": string;
    "hero": {
        "name": string;
        "subject": string;

        "social": {
            "icon": string;
            "url": string;
        }[];

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
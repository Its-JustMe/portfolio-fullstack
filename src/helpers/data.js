exports.data = {
    "title": "Arthur Santos | Portfolio Website",
    "hero": {
        "name": "Arthur Santos",
        "subject": "Desenvolvedor Web",
        "social": [
            {
                "icon": "devicon-linkedin-plain",
                "url": "https://www.linkedin.com/in/arthur-santos-3b61a8267/"
            },
            {
                "icon": "devicon-github-original",
                "url": "https://github.com/Its-JustMe"
            },
            {
                "icon": "fa-solid fa-envelope",
                "url": "mailto:contato.arthursantosdev",
            }
        ],
        "curriculum": "/assets/cv/curriculo_ArthurSantos.pdf",
        "description": function () {
            const skills = [];
            for (let skill = 0; skill < this.skills.length; skill++) {
                if (skill === 6) {
                    break;
                }
                skills.push(this.skills[skill].name);
            }
            return `${this.subject} com experiência em programação utilizando ${skills.join(', ')} e com conhecimento em Programação Orientada a Objetos (POO); Meu primeiro contato com programação foi aos 14 anos, mas foi aos 16 que comecei a me dedicar a essa área de forma mais intensa  quando ingressei no curso de Informática para Internet na `
        },
        "education": "FIEB",
        "photo": "/assets/imgs/foto_arthur.jpeg",

        "skills": [
            {
                "name": "HTML",
                "icon": "devicon-html5-plain",
                "percent": "90%"
            },
            {
                "name": "CSS",
                "icon": "devicon-css3-plain",
                "percent": "85%"
            },
            {
                "name": "SASS",
                "icon": "devicon-sass-original",
                "percent": "40%"
            },
            {
                "name": "JavaScript",
                "icon": "devicon-javascript-plain",
                "percent": "45%"
            },
            {
                "name": "TypeScript",
                "icon": "devicon-typescript-plain",
                "percent": "30%"
            },
            {
                "name": "NodeJS",
                "icon": "devicon-nodejs-plain",
                "percent": "40%"
            },
            {
                "name": "Bootstrap",
                "icon": "devicon-bootstrap-plain",
                "percent": "25%"
            },
            {
                "name": "Express.js",
                "icon": "devicon-express-original",
                "percent": "45%"
            },
            {
                "name": "Git",
                "icon": "devicon-git-plain",
                "percent": "40%"
            },
            {
                "name": "MySQL",
                "icon": "devicon-mysql-plain-wordmark",
                "percent": "30%"
            }
        ],
        "projects": [
            {
                "name": "LingoLink",
                "imgPath": "/imgs/projects/tradutor.png",
                "urlWebsite": "https://tradutor-typescript.vercel.app/",
                "urlRepository": "https://github.com/Its-JustMe/tradutor-typescript",
                "langIcons": [
                    "devicon-html5-plain gradient-icon", 
                    "devicon-sass-original",
                    "devicon-typescript-plain gradient-icon"
                ]
            },
            {
                "name": "QuímicaFácil",
                "imgPath": "/imgs/projects/quimicafacil.png",
                "urlWebsite": "https://quimicafacil.vercel.app/",
                "urlRepository": "https://github.com/Its-JustMe/quimicafacil",
                "langIcons": [
                    "devicon-html5-plain gradient-icon", 
                    "devicon-css3-plain gradient-icon",
                    "devicon-javascript-plain gradient-icon"
                ]
            },
            {
                "name": "Cadastro",
                "imgPath": "/imgs/projects/cadastro.png",
                "urlWebsite": "https://crud-node-haue.onrender.com/",
                "urlRepository": "https://github.com/Its-JustMe/crud-node",
                "langIcons": [
                    "devicon-nodejs-plain",
                    "devicon-express-original",
                    "devicon-mysql-plain-wordmark"

                ]
            },
            {
                "name": "Relógio Digital",
                "imgPath": "/imgs/projects/relogio.png",
                "urlWebsite": "https://relogio-navy.vercel.app/",
                "urlRepository": "https://github.com/Its-JustMe/relogio",
                "langIcons": [
                    "devicon-html5-plain gradient-icon", 
                    "devicon-css3-plain gradient-icon",
                    "devicon-javascript-plain gradient-icon"
                ]
            },
            {
                "name": "Previsão do Tempo",
                "imgPath": "/imgs/projects/previsao-do-tempo.png",
                "urlWebsite": "https://previsao-do-tempo-jet.vercel.app/",
                "urlRepository": "https://github.com/Its-JustMe/previsaoDoTempo",
                "langIcons": [
                    "devicon-html5-plain gradient-icon", 
                    "devicon-typescript-plain gradient-icon"
                ]
            },
            {
                "name": "Movie App",
                "imgPath": "/imgs/projects/movies.png",
                "urlWebsite": "https://its-justme.github.io/movie-app/",
                "urlRepository": "https://github.com/Its-JustMe/movie-app",
                "langIcons": [
                    "devicon-sass-original",
                    "devicon-typescript-plain gradient-icon"
                ]
            }
        ]
    }
};
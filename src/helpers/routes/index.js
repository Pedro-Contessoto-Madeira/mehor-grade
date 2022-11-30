const internal = {
    v1: {
        cursos: {
            get: "/api/v1/cursos",
            list: "/api/v1/cursos/list",
            add: "/api/v1/cursos/add",
            delete: "/api/v1/cursos/delete/"
        },
        disciplinas: {
            get: "/api/v1/disciplinas",
            list: "/api/v1/disciplinas/list",
            add: "/api/v1/disciplinas/add",
            delete: "/api/v1/disciplinas/delete/",
            register: "/api/v1/disciplinas/register"
        },
        turmas: {
            get: "/api/v1/turmas",
            list: "/api/v1/turmas/list",
            add: "/api/v1/turmas/add",
            delete: "/api/v1/turmas/delete/"
        },
        auth: {
            login: "/api/v1/auth"
        },
        usuarios: {
            get: "/api/v1/usuarios",
            add: "/api/v1/usuarios/add",
            delete: "/api/v1/usuarios/",
            admin: "/api/v1/usuarios/admin/",
            edit: "/api/v1/usuarios/edit/",
            list: "/api/v1/usuarios/list"
        }
    }
}

const external = {
    v1: {
        cursos: {
            get: "/v1/cursos",
            list: "/v1/cursos/list",
            add: "/v1/cursos/add",
            delete: "/v1/cursos/delete/"
        },
        disciplinas: {
            get: "/v1/disciplinas",
            list: "/v1/disciplinas/list",
            add: "/v1/disciplinas/add",
            delete: "/v1/disciplinas/delete/",
            register: "/v1/disciplinas/register"
        },
        turmas: {
            get: "/v1/turmas",
            list: "/v1/turmas/list",
            add: "/v1/turmas/add",
            delete: "/v1/turmas/delete/"
        },
        auth: {
            login: "/v1/auth"
        },
        usuarios: {
            get: "/v1/usuarios",
            add: "/v1/usuarios",
            delete: "/v1/usuarios/",
            admin: "/v1/usuarios/admin/",
            edit: "/v1/usuarios/edit/",
            list: "/v1/usuarios/list"
        }
    }
}

const headers = { 'Content-Type': 'application/json' , 'Access-Control-Allow-Origin' : "*" }

const host = "https://que-materia-eu-faco-1667957040279.azurewebsites.net"

const routes = { internal, external }

export {
    routes,
    headers,
    host
}


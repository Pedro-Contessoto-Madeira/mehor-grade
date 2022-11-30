import auth from '@helpers/api/auth'
import Usuarios from '@helpers/api/usuarios'

export default async function handler(req, res) {
    const { method, body } = req
    if('POST' != method)
        return res.status(400).json({message: "Method Not Allowed"})


    const response = await auth.getJWT(body)
    
    if(response.status != 200)
        return res.status(401).end()

    const json = await response.json()
    const { token } = json 
    const id = getSubFromJWT(token)
    const headers = getHeaders(token)
    const user = await getUser(id,headers)
    const { perfil: { permissao }} = await user.json()
    const path = permissao == "ADMIN" ? "/admin/home" : "/discente/home"
    
    res
        .status(200)
        .setHeader("set-cookie", `Authorization=Bearer ${token}; path=/; samesite=lax; httponly;`)
        .redirect(path)
        .end()
}

const getUser = async (id, cookies) => {
    const usuario = new Usuarios()
    usuario.headers = cookies
    const response = await usuario.get(id)
    return response
}


const getSubFromJWT = jwt => {
    const [, payload, ] = jwt.split(".")
    const decodedBase64 = Buffer.from(payload, 'base64').toString('ascii')    
    const { sub } = JSON.parse(decodedBase64)
    return sub 
}

const getHeaders = tokenAuthorization => {
    return {
        "accept": "*/*",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin" : "*",
        "Authorization" : `Bearer ${tokenAuthorization}`
    }
}
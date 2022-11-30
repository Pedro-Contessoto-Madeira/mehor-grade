import Link from "next/link"
import React, { useState } from "react";
import { routes, headers } from "@helpers/routes"
import { useForm } from 'react-hook-form'
import AlertError from '@alerts/error'
import { useRouter } from "next/router";
import ButtonDefault from "@buttons/default"

export default function LoginForm(){
    const router = useRouter()
    const { register, handleSubmit } = useForm()
    const [isError, setIsError] = useState("")
    const [carregando, setCarregando] = useState(false)


     const onSubmit = data => {
        setCarregando(true)
        setIsError("")
        fetch(routes.internal.v1.usuarios.add, {
            method: "POST",
            body: JSON.stringify(data),
            headers,
        }).then(response => {
            console.log(response.status);
            if(response.status == 200) router.push("/visitante/login")
            else setIsError("Não foi possível criar usuário")
        })
    };
    return (
      <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Cadastrar</h1>
            <div className="mb-3">
                <label className="form-label" >Email</label>
                <input className="form-control" type="text" {...register('email') }/>
            </div>
            <div className="mb-3">
                <label className="form-label" >Usuário</label>
                <input className="form-control" type="text" {...register('name') }/>
            </div>
            <div className="mb-3">
                <label className="form-label">Senha</label>
                <input type="password" className="form-control" {...register('senha')}/>
            </div>
            <br/>
            <ButtonDefault 
                acao={"Cadastrando..."}
                estatico={"Cadastrar"}
                carregando={carregando}
            />
        </form>
        <br/>
        { isError && <AlertError>{ isError }</AlertError>}
        </>
    );
}
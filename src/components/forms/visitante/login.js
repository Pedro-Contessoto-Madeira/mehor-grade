import { useForm } from 'react-hook-form'
import Link from "next/link"

export default function LoginForm(){
    const { register, handleSubmit } = useForm()

    const onSubmit = data => {
        console.log(data)
    }

    return (
      <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label className="form-label" >Endereço de email</label>
                <input className="form-control" type="email" {...register('email') }/>
                <div className="form-text">Nunca compartilhe seu e-mail com ninguém!</div>
            </div>
            <div className="mb-3">
                <label className="form-label">Senha</label>
                <input type="password" className="form-control" {...register('password')}/>
            </div>
            <div className="form-text">Não possuí cadastro? <Link href="/visitante/cadastro">clique aqui para cadastrar</Link></div>
            <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
        </>
    );
}
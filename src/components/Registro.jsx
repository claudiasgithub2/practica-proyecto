// Formulario usando useForm
import { useForm } from 'react-hook-form';

function Registro() {
    const { register, handleSubmit } = useForm();

    const enviar = (data) => {
        console.log(data);
    }

    return (
        <div className="container mt-5">
            <form className="mt-3 form-label" onSubmit={handleSubmit(enviar)} >
                
                    <label className="mt-3">Nombre</label>
                    <input className="form-control"
                    type="text"  
                    placeholder='Ingresa tu nombre'
                    {...register("nombre")} />
      
                    <label className="mt-3">Apellido</label>
                    <input className="form-control" 
                    type="text" 
                    placeholder='Ingresa tu apellido'
                    {...register("apellido")} />
                
                
                    <label className="mt-3">Correo electrónico</label>
                    <input className="form-control"
                    type="email" 
                    placeholder='Ingresa tu email'
                    {...register("mail")} />
                
                
                    <label className="mt-3">Contraseña</label>
                    <input className="form-control"
                    type="contraseña"   
                    placeholder='Ingresa tu contraseña'
                    {...register("password")} />
               
                <button type="submit" className="btn btn-primary mt-3">Enviar</button>
            </form>
        </div>
    )
}

export default Registro;


// import React, { useState } from 'react'      //Forma 1 de Formularios

// function Registro() {

//     const[valores, setValores]= useState ({
//         nombre: "",
//         apellido: "",
//         mail: "",
//         password: ""
//     });
   

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log ("Enviado", valores)
//     }

//     const handleValores = (e) => {
//         setValores({
//             ...valores, [e.target.name]: e.target.value
//         })
        
//         console.log(e.target.name);
//     }

    

//     return (
//         <div className="container mt-5">
//             <form className="mt-3 form-label" onSubmit={handleSubmit} >
                
//                     <label className="mt-3">Nombre</label>
//                     <input 
//                     type="text" name="nombre" id="firstName" className="form-control" 
//                     placeholder='Ingresa tu nombre'
//                     value={valores.nombre}
//                     onChange={handleValores} />
      
//                     <label className="mt-3">Apellido</label>
//                     <input 
//                     type="text" name="apellido" className="form-control" 
//                     placeholder='Ingresa tu apellido' 
//                     value={valores.apellido} 
//                     onChange={handleValores} />
                
                
//                     <label className="mt-3">Correo electrónico</label>
//                     <input 
//                     type="email" name="mail" className="form-control"  
//                     placeholder='Ingresa tu email'
//                     value={valores.mail}
//                     onChange={handleValores} />
                
                
//                     <label className="mt-3">Contraseña</label>
//                     <input 
//                     type="contraseña" name="password" className="form-control" 
//                     placeholder='Ingresa tu contraseña'
//                     value={valores.password}
//                     onChange={handleValores} />
               
//                 <button type="submit" className="btn btn-primary mt-3">Enviar</button>



//             </form>


//         </div>
//     )
// }

// export default Registro
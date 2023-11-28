import React from 'react'

function Registro() {


    return (
        <div className="container mt-5">
            <form>
                <div className="mt-3">
                    <label className="form-label">Nombre</label>
                    <input type="text" name="firstName" id="firstName" className="form-control" placeholder='Ingresa tu nombre' />

                </div>


                <div className="mt-3">
                    {/* <label className="form-label">Apellido</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" /> */}
                    <label className="form-label">Apellido</label>
                    <input type="text" id="lastname" className="form-control" placeholder='Ingresa tu apellido' />
                </div>
                <div className="mt-3">
                    <label className="form-label">Correo electrónico</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Ingresa tu email' />
                </div>
                <div className="mt-3">
                    <label className="form-label">Contraseña</label>
                    <input type="contraseña" className="form-control" id="exampleInputEmail1" placeholder='Ingresa tu contraseña' />
                </div>
                <button type="submit" className="btn btn-primary mt-3">Enviar</button>



            </form>


        </div>
    )
}

export default Registro
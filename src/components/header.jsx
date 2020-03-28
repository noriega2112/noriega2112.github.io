import React from 'react'
import illustration from "../img/photo.svg";
import Form from "./contact.form";

export default () => (
    <header className="bg-gray-300">
        <div className="container mx-auto p-12 max-w-4xl ">
            <div className="flex justify-center items-center">
                
                <div className="flex-1">
                    <h1 className="font-bold text-blue-500 text-6xl">¡Hola! Soy Edwin</h1>
                    <p className="text-xl font-light">Creo aplicaciones web y de escritorio.</p>
                </div>
                <img src={illustration} alt="Ilustración informática" style={{height: "300px"}}/>
                </div>

            <div>
                <Form/>
            </div>
        </div>
    </header>
)
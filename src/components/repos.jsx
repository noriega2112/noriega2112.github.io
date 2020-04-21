import React, { useEffect, useState } from 'react';
import Repo from './repo';


export default () => {
    
    const [repos, setRepos] = useState([]);
    const [reposCount, setReposCount] = useState([]);
    
    
    useEffect(() => {

        const data = sessionStorage.getItem("repos");
        let myRepos;
        if(data){
            myRepos = JSON.parse(data);

            setReposCount(myRepos.length);

            myRepos = myRepos.slice(1,13)
            return setRepos(myRepos);
        }

        async function fetchRepos() {
            const response = await fetch("https://api.github.com/users/noriega2112/repos");
            myRepos = await response.json();
            setReposCount(myRepos.length);

            
            sessionStorage.setItem("repos", JSON.stringify(myRepos));
            myRepos = myRepos.slice(1,13)

            setRepos(myRepos);
          }

        fetchRepos();
    },[]);

    var reposhc = [
        {
            "id": 229682927,
            "html_url": "https://github.com/noriega2112/react-badges",
            "name": "react-badges",
            "description": "React SPA para la creación de badges",
            "web": null,
            "image": "https://i.imgur.com/YWS1JJ5.gif",
        },
        {
            "id": 202646188,
            "html_url": "https://github.com/noriega2112/angular-app",
            "name": "angular-app",
            "description": "Angular SPA",
            "web": "https://angular-pf.herokuapp.com/",
            "image": null,
        },
        // {
        //     "id": 202948475,
        //     "html_url": "https://github.com/noriega2112/chat-con-socket.io",
        //     "name": "chat-con-socket.io",
        //     "description": "Chat usando NodeJs y Socket.io ",
        //     "web": null,
        //     "image": null,
        // },
        {
            "id": 248651391,
            "html_url": "https://github.com/noriega2112/gpioControl",
            "name": "gpioControl",
            "description": "Programa que controla los GPIO(17, 21 y 27) de la raspberry pi",
            "web": null,
            "image": "https://i.imgur.com/cZbFuZ6.gif",
        },
        {
            "id": 203288704,
            "html_url": "https://github.com/noriega2112/heroes-app",
            "name": "heroes-app",
            "description": "Angular SPA",
            "web": "https://app-comic.herokuapp.com",
            "image": null,
        },
        {
            "id": 250721041,
            "html_url": "https://github.com/noriega2112/noriega2112.github.io",
            "name": "noriega2112.github.io",
            "description": "Página personal",
            "web": "https://noriega2112.github.io/",
            "image": null,
        },
        {
            "id": 217758729,
            "html_url": "https://github.com/noriega2112/proyecto-aerolinea",
            "name": "proyecto-aerolinea",
            "description": "Crud en C# y MySql",
            "web": null,
            "image": "https://i.imgur.com/6KkpZvU.gif",
        },
        {
            "id": 218206033,
            "html_url": "https://github.com/noriega2112/proyecto-arduino",
            "name": "proyecto-arduino",
            "description": "Interfaz para ver el monitoreo enviado desde el arduino ",
            "web": "https://noriega2112.github.io/proyecto-arduino/",
            "image": null,
        }

    ]

    return(
        <div className="max-w-4xl mx-auto mt-12">
            <header className="text-center">
                <h2 className="text-3xl font-bold">Mis trabajos</h2>
                <p>Colaboración de código</p>
            </header>
            {/* <ul className="repos-list">
                <li className="flex items-center">
                    <div className="w-10/12 overflow-x-hidden">
                        <h4 className="text-blue-600 font-bold truncate">chat-con-socket.io</h4>
                        <p className="text-sm text-gray-800 overflow-y-hidden truncate" style={{height:"1.5em"}}>Chat using NodeJs and Socket.io</p>
                    </div>
                    <div className="flex-1 text-right">
                        <a href="https://github.com/noriega2112/chat-con-socket.io" target="_blank" rel="noopener noreferrer"> Ver </a>
                    </div>
                </li>
            </ul> */}
    
            <ul className="repos-list">
                {
                    reposhc.map((repo)=>{
                        return <Repo repo={repo} key={repo.id}/>
                    })
                }
            </ul> 
            <div className="mt-8 text-center">
                <a href="https://github.com/noriega2112" className="btn" target="_blank" rel="noopener noreferrer">Ver más en Github({reposCount})</a>
            </div>
        </div>
    );
};
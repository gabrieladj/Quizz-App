import React from "react";

const HomePage = () =>{
    return (
        <main>
            <div className="m-10 p-10" >
            <h1 className="text-center font-semibold "> Parctise the Quizz and get smarter</h1>
            <p>Assessment, instruction, and practise htat motivate every student</p>
            <h2>Helloe  Nikt</h2>
            </div>

            <div className="buttons-container inline-grid gap-2 grid-cols-2">
              <a href="/">Teachers</a>
              <a href="/">Students</a>
            </div>

        </main>
    );
}

export default HomePage;
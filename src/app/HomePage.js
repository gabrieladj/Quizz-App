import React from "react";

const HomePage = () =>{
    return (
        <main>
            <div className="m-10 p-10" >
            <h1 className="text-center font-semibold "> Parctise the Quizz and get smarter</h1>
            <p className="text-center">Assessment, instruction, and practise htat motivate every student</p>
            
            </div>


            <div className="buttons-container flex justify-center">
                <div className="inline-grid gap-2 grid-cols-2">
                    <div>
                        <button href="/" className="rounded-lg bg-blue-300 px-6 py-3 text-left">Teacher<p>Sign Up for free</p></button>
                        
                    </div>
                    <div>
                        <button href="/" className="rounded-lg bg-gray-300 px-6 py-3 text-left">Student<p>Login as student</p></button>
                        
                    </div>
                </div>
            </div>

        </main>
    );
}

export default HomePage;
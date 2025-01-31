import React from "react";
import { NameAgenda } from "../component/nameAgenda";

export const CreateAgenda = () => {

    return (

        <div className="container">
            <h1 className="text-center pt-2">Create your own contact list:</h1>
            <div>
                <NameAgenda />
            </div>
           
        </div>
    )
}
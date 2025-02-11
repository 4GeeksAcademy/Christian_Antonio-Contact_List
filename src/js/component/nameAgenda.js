import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";


export const NameAgenda = () => {
    const { store, actions } = useContext(Context);
    const [agendaSlug, setAgendaSlug] = useState("");
    const [fetchAgenda, setFetchAgenda] = useState("");
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        if (agendaSlug) {

            console.log("funcion save")
            e.preventDefault();
            actions.createAgenda(agendaSlug).then(() => { navigate("/addContact") });
        }
    };

    const handleFetch = (e) => {
        e.preventDefault();
        actions.fetchContacts(fetchAgenda).then(() => { navigate("/contacts") });
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="row g-3 justify-content-center mt-2">
                <div className="col-auto">
                    <label htmlFor="agendaSlug" className="form-label pt-1"><strong>New contact list:</strong></label>
                </div>
                <div className="col-4">
                    <input
                        type="text"
                        className="form-control"
                        id="agendaSlug"
                        value={agendaSlug}
                        onChange={(e) => setAgendaSlug(e.target.value)}
                        placeholder="Create your contact list name"
                    />
                </div>
                <div className="col-auto">
                    <button
                        type="submit"
                        className="btn btn-secondary mb-3 button1">
                        Save
                    </button>
                </div>
            </form>

            <form onSubmit={handleFetch} className="row g-3 justify-content-center mt-2">
                <div className="col-auto">
                    <label htmlFor="fetchAgenda" className="form-label pt-1"><strong>Contact list:</strong></label>
                </div>
                <div className="col-4">
                    <input
                        type="text"
                        className="form-control"
                        id="fetchAgenda"
                        value={fetchAgenda}
                        onChange={(e) => setFetchAgenda(e.target.value)}
                        placeholder="Type your contact list name"
                    />
                </div>
                <div className="col-auto ml-5">
                    <button
                        type="submit"
                        className="btn btn-secondary mb-3 button1">
                        Get in
                    </button>
                </div>
            </form>
        </>
    )
}
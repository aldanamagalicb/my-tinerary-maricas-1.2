import React from "react";
import "../NotFound.css"
import CallToAction from "../components/CallToAction";

export default function NotFound() {
    return (
        <div className="container bg-img">
            <div className='w-100 flex center gap-2 py-2'>
                <CallToAction rute='/home' text='HOME' className='call-card fs-4' />
            </div>   
        </div>
    );
}
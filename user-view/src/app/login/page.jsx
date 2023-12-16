"use client"
import { useRef } from "react"

export default function page() {
    const phoneInputRef = useRef();
    return (
        <div className={`container`}>
            <input className={`form-control`} ref={phoneInputRef}/>
            <input className={`form-control`} ref={passwordRef} />
        </div>
    )
}

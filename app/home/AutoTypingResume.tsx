"use client"
import { useState } from "react"
import { deepClone } from "../lib/parse-resume-from-pdf/deep-clone"
import { initialResumeState } from "../lib/redux/resumeSlice"

export const AutoTypingResume = () => {

    const [resume, setResume] = useState(deepClone(initialResumeState))
    
}
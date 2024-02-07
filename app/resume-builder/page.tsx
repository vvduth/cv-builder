"use client"

import { Provider } from "react-redux"
import { store } from "../lib/redux/store"
import { ResumeForm } from "../components/ResumeForm"
import { Resume } from "../components/Resume"

export default function Create() {

    return (
        <Provider store={store} >
            <main className="realtive h-full w-full overflow-hidden">
                <div className="grid grid-cols-3 md:grid-cols-6">
                    <div className="col-span-3">
                        <ResumeForm />
                    </div>
                    <div className="col-span-3">
                        <h1 >Live Preview of our edits in resume sheet</h1>
                        <Resume />
                    </div>
                </div>
            </main>
        </Provider>
    )
} 
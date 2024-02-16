"use client"

import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/outline"
import dynamic from "next/dynamic"

const ResumeControlBar = ({
    scale, setScale, documentSize, document, fileName
}: {
    scale: number,
    setScale: (scale: number) => void, 
    documentSize: string, 
    document: JSX.Element,
    fileName: string, 
}) => {


    return (
        <div className="sticky bottom-0 left-0 right-0 
        flex h-[var(--resume-control-bar-height)]  items-center justify-center 
        px-[var(--resume-padding)] text-gray-600 lg:justify-between">
            <div className="flex items-center gap-2">
                <MagnifyingGlassCircleIcon className="h-5 w-5"
                    aria-hidden="true"
                />
            </div>
        </div>
    )
}

export const ResumeControlBarCSR = dynamic(
    () => Promise.resolve(ResumeControlBar),
    {
        ssr: false,
    }
)
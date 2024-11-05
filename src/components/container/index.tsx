import { ReactNode } from "react"

interface ContainerProps {
    children: ReactNode
}

export default function Container({children}: ContainerProps){
    return(
        <div className="w-full h-screen max-w-7xl mx-auto px-4 pt-20 pb-16">
            {children}
        </div>
    )
}
import React from 'react'
type ContainerPropsType = {
    children?: React.ReactNode;
    className?: string
}

function Container({ children, className }: ContainerPropsType) {
    return (
        <div className="max-w-[1158px] px-6 mx-auto">
            {children}
        </div>
    )
}

export default Container

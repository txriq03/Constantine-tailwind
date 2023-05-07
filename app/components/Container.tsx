'use client';

interface ContainerProps {
    children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({children}) => {
  return (
    <div className="
        max-w-[2520px]
        py-3
        mx-auto
        3xl:px-60
        lg:px-20
        md:px-10
        sm:px-5
        px-5"
    >
        {children}</div>
  )
}

export default Container
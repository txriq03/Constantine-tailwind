'use client';

interface ContainerProps {
    children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({children}) => {
  return (
    <div className="
        max-w-[2520px]
        bg-slate-200
        py-3
        mx-auto
        xl:px-60
        lg:px-20
        md:px-10
        sm:px-10
        xs:px-2
        px-20
        tracking-tighter"
    >
        {children}</div>
  )
}

export default Container
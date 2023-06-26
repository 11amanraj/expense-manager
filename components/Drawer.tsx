import React from 'react'

export default function Drawer({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <div className='bg-violet-700 text-white absolute mx-2 md:mx-0 my-2 md:my-0 rounded-lg md:rounded-none px-4 py-4 left-0 right-0 top-20 h-96 md:left-24 md:top-0 md:h-screen md:w-96'>{children}</div>
  )
}

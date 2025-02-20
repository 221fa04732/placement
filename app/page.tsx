import Link from 'next/link'


export default function(){
  return(<div className='min-h-screen flex flex-col justify-center items-center text-blue-500'>
    <Link href='/student' className='text-xl p-10'>View Student</Link>
    <Link href={'/upload'} className='text-xl p-10'>Upload</Link>
  </div>)
}
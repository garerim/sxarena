import { ShoppingCart } from 'lucide-react'
import { ThemeToggle } from './theme-toggle'
import { Button } from './ui/button'
import Link from 'next/link'
import DiscordButton from './discord-button'
import { SideMenu } from './side-menu'

export default function Header() {

    return (
        <>
            <SideMenu />
            <div className='md:flex hidden w-full items-center gap-5 py-4 px-6 mb-2'>
                <div className='mr-auto flex items-center gap-6'>
                    <Link className='font-bold text-2xl header-btn' href={'/'}>Accueil</Link>
                    <Link className='font-bold text-2xl header-btn' href={'/play'}>Rejoindre</Link>
                    <Link className='font-bold text-2xl header-btn' href={'/vote'}>Vote</Link>
                    <Link className='font-bold text-2xl header-btn' href={'/wiki'}>Wiki</Link>
                </div>
                {/* <ThemeToggle /> */}
                <DiscordButton />
                <Button className='flex items-center justify-between gap-2 bg-yellow-400'>
                    <ShoppingCart className='stroke-2 w-6 h-6' />
                    <span className='font-bold'>Boutique</span>
                </Button>
            </div>
        </>
    )
}
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu, ShoppingCart } from "lucide-react"
import DiscordButton from "./discord-button"
import Link from "next/link"

export function SideMenu() {
    return (
        <div className="flex md:hidden">
            <Sheet>
                <SheetTrigger asChild>
                    <Button className="w-fit h-fit m-2 ml-auto">
                        <Menu className="w-6 h-6" />
                    </Button>
                </SheetTrigger>
                <SheetContent className="bg-white flex flex-col">
                    <SheetHeader className="text-black">
                        <SheetTitle className="text-black">SX Arena</SheetTitle>
                    </SheetHeader>

                    <Button>
                        <Link className='font-bold text-lg' href={'/'}>Accueil</Link>
                    </Button>
                    <Button>
                        <Link className='font-bold text-lg' href={'/play'}>Rejoindre</Link>
                    </Button>
                    <Button>
                        <Link className='font-bold text-lg' href={'/vote'}>Vote</Link>
                    </Button>
                    <Button>
                        <Link className='font-bold text-lg' href={'/wiki'}>Wiki</Link>
                    </Button>

                    <SheetFooter className="flex flex-col items-center gap-4 mt-auto">
                        <DiscordButton className="w-full" />
                        <Button className='flex items-center justify-center gap-4 bg-yellow-400 w-full'>
                            <ShoppingCart className='stroke-2 w-7 h-7' />
                            <span className='font-bold text-lg'>Boutique</span>
                        </Button>
                    </SheetFooter>
                </SheetContent>
            </Sheet>
        </div>
    )
}

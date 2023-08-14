import { LogOut } from 'lucide-react'
import Image from 'next/image'

export function Profile() {
  return (
    <div className="grid-cols-profile grid items-center gap-3">
      <Image
        src="https://github.com/mgckaled.png"
        className="h-10 w-10 rounded-full"
        alt="Imagem do Avatar do perfil"
        width={75}
        height={75}
      />
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Marcel Kaled
        </span>
        <span className="truncate text-sm text-zinc-500">
          mgck.dev@proton.me
        </span>
      </div>
      <button type="button" className="ml-auto rounded-md p-2 hover:bg-zinc-50">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </button>
    </div>
  )
}

"use client";
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import { cn } from '@/lib/utils';
import NumberTicker from './ui/number-ticker';

interface MemberData {
  memberCount: number | null;
  onlineCount: number | null;
}

export default function DiscordButton({ className }: { className?: string }) {

  const [data, setData] = useState<MemberData>({
    memberCount: null,
    onlineCount: null,
  });

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/discord');
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des données.');
        }

        const result = await response.json();
        setData({
          memberCount: result.memberCount,
          onlineCount: result.onlineCount,
        });
      } catch (err) {
        setError((err as Error).message);
      }
    }

    fetchData();
  }, []);

  return (
    <Button className={cn('flex items-center justify-center gap-3 ', className)}>
      <div className='w-2 h-2 rounded-full bg-red-700 animate-ping' />
      <span className='font-bold text-lg'>
        <NumberTicker value={data.onlineCount ?? 0} />
      </span>
      <span className='font-bold text-lg'>{className === 'w-full' && "Discord"}</span>
      <Image
        src={'/icon/discord.svg'}
        width={35}
        height={35}
        alt='Icone de Discord'
      />
    </Button>
  )
}

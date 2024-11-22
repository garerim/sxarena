import { NextResponse } from "next/server";

interface DiscordGuildResponse {
    approximate_member_count: number;
    approximate_presence_count: number;
}

export async function GET(
    req: Request
) {
    const DISCORD_BOT_TOKEN = process.env.DISCORD_BOT_TOKEN;
    const DISCORD_GUILD_ID = process.env.DISCORD_GUILD_ID;
    if (!DISCORD_BOT_TOKEN || !DISCORD_GUILD_ID) {
        return new NextResponse('Les variables d\'environnement DISCORD_BOT_TOKEN ou DISCORD_GUILD_ID ne sont pas définies.', { status: 500 });
    }
    try {
        const response = await fetch(
            `https://discord.com/api/v10/guilds/${DISCORD_GUILD_ID}?with_counts=true`,
            {
                headers: {
                    Authorization: `Bot ${DISCORD_BOT_TOKEN}`,
                },
            }
        );

        const data: DiscordGuildResponse = await response.json();

        return NextResponse.json({
            memberCount: data.approximate_member_count,
            onlineCount: data.approximate_presence_count,
        });
    } catch (error) {
        console.log("[CHANNELS_POST]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}
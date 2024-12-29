export type NavbarLinkType = {
    href: string;
    text: string;
}

export type MenuMobileLinkType = {
    href: string;
    text: string;
}

export type HeroContentType = {
    title: string;
    subtitle: string;
    ctaText: string;
}

export type ShortenLinkType = {
    shortenUrl: string;
    url: string;
}


export type StatsCardType = {
    title: string;
    icon: string;
    description: string;
    alt: string;
}

export type StatsContentType = {
    title: string;
    subtitle: string;
    cards: StatsCardType[]
}

export type BoosContentType = {
    title: string;
    ctaText: string;
}
export interface Sponsor {
  name: string,
  desc: string,
  logo_image: string,
  url: string,
  slug: string
}

export interface Sponsors {
  name: string,
  sponsors: Sponsor[]
}

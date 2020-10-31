import fetch from 'node-fetch'
import { Response } from './types'

interface BreedsResponse extends Response {
  body: string[]
}

interface BreedsListApiResponse {
  message: object
  status: string
}

export async function handler(): Promise<BreedsResponse> {
  const res = await fetch('https://dog.ceo/api/breeds/list/all')
  const dogsBreedList: BreedsListApiResponse = await res.json()
  const breedsPayload: string[] = []
  Object.entries(dogsBreedList.message).forEach(([breedEntry, subreeads]: [string, string[]]) => {
    if (subreeads.length > 0) {
      breedsPayload.push(breedEntry)
      Object.values(subreeads).forEach(subreead => {
        breedsPayload.push(`${breedEntry} ${subreead}`)
      })
    } else {
      breedsPayload.push(breedEntry)
    }
  })

  return {
    statusCode: 200,
    body: breedsPayload,
  }
}

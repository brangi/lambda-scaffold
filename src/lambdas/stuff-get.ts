import fetch from 'node-fetch'
import { Response } from './types'

interface StuffResponse extends Response {
  body: RandomDog
}

interface RandomDog {
  message: string
  status: string
}

export async function handler(): Promise<StuffResponse> {
  const res = await fetch('https://dog.ceo/api/breeds/image/random')
  const payload: RandomDog = await res.json()
  return {
    statusCode: 200,
    body: payload,
  }
}

import fetch from 'node-fetch'
import { handler } from './breeds-get'

const mockedFetch: jest.Mock = fetch as any

jest.mock('node-fetch')

describe('breeds-get handler', () => {
  const mockPayload = {
    message: {
      shiba: [],
      shihtzu: [],
      spaniel: ['blenheim', 'brittany', 'cocker', 'irish', 'japanese', 'sussex', 'welsh'],
      springer: ['english'],
      stbernard: [],
      terrier: ['sealyham', 'silky', 'tibetan', 'toy', 'westhighland', 'wheaten', 'yorkshire'],
      wolfhound: ['irish'],
    },
    status: 'success',
  }
  beforeEach(() => {
    mockedFetch.mockReturnValueOnce({
      json: () => {
        return mockPayload
      },
    })
  })

  it('returns a list of all breeds as a flat array of strings, with each sub-breed getting a separate element', async () => {
    const response = await handler()
    expect(response).toMatchObject({
      body: [
        'shiba',
        'shihtzu',
        'spaniel',
        'spaniel blenheim',
        'spaniel brittany',
        'spaniel cocker',
        'spaniel irish',
        'spaniel japanese',
        'spaniel sussex',
        'spaniel welsh',
        'springer',
        'springer english',
        'stbernard',
        'terrier',
        'terrier sealyham',
        'terrier silky',
        'terrier tibetan',
        'terrier toy',
        'terrier westhighland',
        'terrier wheaten',
        'terrier yorkshire',
        'wolfhound',
        'wolfhound irish',
      ],
    })
  })
})

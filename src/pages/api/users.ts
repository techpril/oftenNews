import { NextApiRequest, NextApiResponse } from 'next'

export default (request: NextApiRequest, response: NextApiResponse) => {
    const users = [
        { id: 1, name: 'techpril'},
        { id: 2, name: 'FernandoLins8'},
        { id: 3, name: 'PeterMatthew'},
    ]

    return response.json(users)
}

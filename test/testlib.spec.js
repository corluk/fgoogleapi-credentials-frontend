import React from 'react'
import {rest} from 'msw'
import {setupServer} from 'msw/node'
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import homeIndex from '../src/pages/home.index'
import '@testing-library/jest-dom'
import { HomePage } from '..'

const server = setupServer(
    rest.get('/greeting', (req, res, ctx) => {
      return res(ctx.json({greeting: 'hello there'}))
    }),
  )

  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())
  
test("1",async ()=>{

    server.use(rest.get("/greeting",(req,res,ctx)=>{
        return res(ctx.status(500))  
    }),

    render(<HomePage />)

 
)
  // Arrange 
  // Act 
  // Assert 
    console.log(server)
    expect(1 == 1 )
})
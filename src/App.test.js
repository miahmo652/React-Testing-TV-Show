import React from 'react';
import {render, waitFor} from '@testing-library/react';
import {fetchShow as mockFetchShow} from './api/fetchShow'
import '@testing-library/jest-dom/extend-expect';
import App from './App'

jest.mock('./api/fetchShow')

test('App fetches shows and renders it', async ()=>{
mockFetchShow.mockResolvedValueOnce(mockData);
const {queryAllByText} = render(<App />);
expect(queryAllByText(/fetching data.../i)).toHaveLength(1);
await waitFor(()=>{
    expect(queryAllByText(/summary/i)).toHaveLength(1);
})



})
const mockData = {
    image: { original: "original" },
    name: "name",
    summary: "<p>summary</p>",
    _embedded: {
      episodes: [
        {
          id: "1",
          image: { medium: "medium_image" },
          name: "name",
          season: 3,
          number: 2,
          summary: "<p>Summary</p>",
          runtime: 20,
        },
      ],
    },
  };
  
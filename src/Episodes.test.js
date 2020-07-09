import React from 'react';
import Episodes from './components/Episodes';
import {render} from '@testing-library/react';

test("testing", ()=>{
    const {queryAllByText, rerender, getByText} = render(<Episodes episodes={[]} />)
    const theEpisodes = queryAllByText(/season/i)
    expect(theEpisodes).toHaveLength(0);

    rerender(<Episodes error='' episodes={mockData}/>)
    const episodes= getByText(/name/i)
    expect(episodes).toBeTruthy();
})

const mockData = [{
    id: '1',
    image: {medium:"medium_image"},
    name: "name",
    season: 3,
    number: 2,
    summary: "<p>summary</p>",
    runtime:20
}]
import React from "react" 
import renderer from "react-test-renderer" 
import HomePage from "../src/pages/home.index"

test("should work ", ()=>{

    const component = renderer.create(<HomePage />)
    let tree = component.toJSON() 
    expect(tree).toMatchSnapshot()
    
})
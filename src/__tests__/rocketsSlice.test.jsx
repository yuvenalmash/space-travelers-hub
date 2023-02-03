import reducer from "../redux/rockets/rocketsSlice";
describe('Rocket reducer tests', () =>{
  test('should return the initial state', () => {
    expect(reducer(undefined, {type: undefined})).toEqual(
      {contents: [], status: "idle"}
    )
  })
  
  test('should handle making a reservation', () => {
    const previousState = {
      contents: [
        {id: '1', name: 'falcon1', description: 'this is the description', reserved: false}
      ],
      status: "idle"
    }
    const action = { payload: '1', type: 'rockets/makeReservation'}
    expect(reducer(previousState, action)).toEqual(
      {
        contents: [
          {id: '1', name: 'falcon1', description: 'this is the description', reserved: true}
        ],
        status: "idle"
      }
    )
  })
  
  test('should handle cancelling a reservation', () => {
    const previousState = {
      contents: [
        {id: '1', name: 'falcon1', description: 'this is the description', reserved: true}
      ],
      status: "idle"
    }
    const action = { payload: '1', type: 'rockets/cancelReservation'}
    expect(reducer(previousState,action)).toEqual(
      {
        contents: [
          {id: '1', name: 'falcon1', description: 'this is the description', reserved: false}
        ],
        status: "idle"
      }
    )
  })
})

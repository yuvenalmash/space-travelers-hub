import reducer from "../redux/missions/missionsSlice";
describe('Mission reducer tests', () =>{
  test('should return the initial state', () => {
    expect(reducer(undefined, {type: undefined})).toEqual(
      {contents: [], status: "idle"}
    )
  })
  
  test('should handle joining mission', () => {
    const previousState = {
      contents: [
        {mission_id: '1', mission_name: 'Thaicom', description: 'description', joined: false}
      ],
      status: "idle"
    }
    const action = { payload: '1', type: 'missions/joinMission'}
    expect(reducer(previousState, action)).toEqual(
      {
        contents: [
          {mission_id: '1', mission_name: 'Thaicom', description: 'description', joined: true}
        ],
        status: "idle"
      }
    )
  })
  
  test('should handle leaving a mission', () => {
    const previousState = {
      contents: [
        {mission_id: '1', mission_name: 'Thaicom', description: 'description', joined: true}
      ],
      status: "idle"
    }
    const action = { payload: '1', type: 'missions/leaveMission'}
    expect(reducer(previousState,action)).toEqual(
      {
        contents: [
          {mission_id: '1', mission_name: 'Thaicom', description: 'description', joined: false}
        ],
        status: "idle"
      }
    )
  })
})

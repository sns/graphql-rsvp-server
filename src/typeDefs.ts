const typeDefs = `
type Player {
    player_key: ID
    name: String!
    email: String
    teams: [Team!]! @relation(name: "PLAYS_FOR", direction: "OUT")
}
type Team {
    team_key: ID
    name: String!
    players: [Player!]! @relation(name: "PLAYS_FOR", direction: "IN")
}
type Game {
    game_key: ID
    date_and_time: DateTime
    teams: [Team!]! @relation(name: "PLAYS_IN", direction: "IN") 
}
`;

export default typeDefs;
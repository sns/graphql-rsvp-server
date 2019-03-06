const typeDefs = `
type Player {
    player_key: String!
    name: String!
    email: String
    teams: [Team!]! @relation(name: "PLAYS_FOR", direction: "OUT")
}
type Team {
    team_key: String!
    name: String!
    players: [Player!]! @relation(name: "PLAYS_FOR", direction: "IN")
}
type Game {
    date_and_time: DateTime,
    teams: [Team!]! @relation(name: "PLAYS_IN", direction: "IN") 
}
`;

export default typeDefs;
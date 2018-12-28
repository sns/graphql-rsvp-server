const typeDefs = `
type Player {
    Name: String!
    Email: String
    Teams: [Team!]! @relation(name: "PLAYS_FOR", direction: "OUT")
}
type Team {
    Name: String!
    Players: [Player!]! @relation(name: "PLAYS_FOR", direction: "IN")
}
type Game {
    DateTime: DateTime,
    Teams: [Team!]! @relation(name: "PLAYS_IN", direction: "IN") 
}
`;

export default typeDefs;
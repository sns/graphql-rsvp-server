const typeDefs = `
type Player{
    name: String!
}
type Team{
    name: String!
    Players: [Player!]! @relation(name: "PLAYS_FOR", direction:"IN")
}
`;

export default typeDefs;
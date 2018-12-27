const seedMutations = /* GraphQL */ `
     mutation {
        p1: CreatePlayer(name: "Sina") {
            name
        }
        p2: CreatePlayer(name: "Brent") {
            name
        }
        p3: CreatePlayer(name: "Jessica") {
            name
        }
        p4: CreatePlayer(name: "Kevin") {
            name
        }
        p5: CreatePlayer(name: "Angelo") {
            name
        }
        p6: CreatePlayer(name: "Matt") {
            name
        }
        p7: CreatePlayer(name: "Jack") {
            name
        }
        p8: CreatePlayer(name: "Tay") {
            name
        }
        p9: CreatePlayer(name: "Lauren") {
            name
        }
        p10: CreatePlayer(name: "Mia") {
            name
        }
        t1: CreateTeam(name: "Kicks and giggles") {
            name
        }
        pt1: AddTeamPlayers( from: {name: "Sina"}, to: {name: "Kicks and giggles"}) {
            from{
                name
            }
        } 
        pt2: AddTeamPlayers( from: {name: "Jessica"}, to: {name: "Kicks and giggles"}) {
            from{
                name
            }
        } 
        pt3: AddTeamPlayers( from: {name: "Brent"}, to: {name: "Kicks and giggles" }) {
            from{
                name
            }
        } 
        pt4: AddTeamPlayers( from: {name: "Kevin"}, to: {name: "Kicks and giggles" }) {
            from{
                name
            }
        } 
        pt5: AddTeamPlayers( from: {name: "Angelo"}, to: {name: "Kicks and giggles" }) {
            from{
                name
            }
        } 
        pt6: AddTeamPlayers( from: {name: "Matt"}, to: {name: "Kicks and giggles" }) {
            from{
                name
            }
        } 
        pt7: AddTeamPlayers( from: {name: "Jack"}, to: {name: "Kicks and giggles" }) {
            from{
                name
            }
        } 
        pt8: AddTeamPlayers( from: {name: "Lauren"}, to: {name: "Kicks and giggles" }) {
            from{
                name
            }
        }
        pt9: AddTeamPlayers( from: {name: "Mia"}, to: {name: "Kicks and giggles" }) {
            from{
                name
            }
        }
        pt10: AddTeamPlayers( from: {name: "Tay"}, to: {name: "Kicks and giggles" }) {
            from{
                name
            }
        }
    }
`;
export default seedMutations;
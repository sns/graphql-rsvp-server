export const seedNodeMutations = /* GraphQL */ `
    mutation {
        p1: CreatePlayer(name: "Sina") {
            player_key
            name
        }
        p2: CreatePlayer(name: "Brent") {
            player_key
            name
        }
        p3: CreatePlayer(name: "Jessica") {
            player_key
            name
        }
        p4: CreatePlayer(name: "Kevin") {
            player_key
            name
        }
        p5: CreatePlayer(name: "Angelo") {
            player_key
            name
        }
        p6: CreatePlayer(name: "Matt") {
            player_key
            name
        }
        p7: CreatePlayer(name: "Jack") {
            player_key
            name
        }
        p8: CreatePlayer(name: "Tay") {
            player_key
            name
        }
        p9: CreatePlayer(name: "Lauren") {
            player_key
            name
        }
        p10: CreatePlayer(name: "Mia") {
            player_key
            name
        }
        t1: CreateTeam(name: "Kicks and giggles") {
            team_key
            name
        }
        p11: CreatePlayer(name: "Jessica Cades") {
            player_key
            name
        }
        p12: CreatePlayer(name: "Kim Ambrose") {
            player_key
            name
        }
        p13: CreatePlayer(name: "Hattie DeLisle") {
            player_key
            name
        }
        p14: CreatePlayer(name: "Matt Hamilton") {
            player_key
            name
        }
        p15: CreatePlayer(name: "Beth Mahr") {
            player_key
            name
        }
        p16: CreatePlayer(name: "Ryan Michael") {
            player_key
            name
        }
        p17: CreatePlayer(name: "Chris Pumphrey") {
            player_key
            name
        }
        p18: CreatePlayer(name: "Daniel Reiner") {
            player_key
            name
        }
        p19: CreatePlayer(name: "Samuel Souvannason") {
            player_key
            name
        }
        p20: CreatePlayer(name: "Chris Tenneson") {
            player_key
            name
        }
        t2: CreateTeam(name: "Charm City FC") {
            team_key
            name
        }
    }
`;

export const seedRelationshipMutations =
    `mutation {
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
        pt11: AddTeamPlayers( from: {name: "Jessica Cades"}, to: {name: "Charm City FC"}) {
            from{
                name
            }
        } 
        pt12: AddTeamPlayers( from: {name: "Kim Ambrose"}, to: {name: "Charm City FC"}) {
            from{
                name
            }
        } 
        pt13: AddTeamPlayers( from: {name: "Hattie DeLisle"}, to: {name: "Charm City FC" }) {
            from{
                name
            }
        } 
        pt14: AddTeamPlayers( from: {name: "Matt Hamilton"}, to: {name: "Charm City FC" }) {
            from{
                name
            }
        } 
        pt15: AddTeamPlayers( from: {name: "Beth Mahr"}, to: {name: "Charm City FC" }) {
            from{
                name
            }
        } 
        pt16: AddTeamPlayers( from: {name: "Ryan Michael"}, to: {name: "Charm City FC" }) {
            from{
                name
            }
        } 
        pt17: AddTeamPlayers( from: {name: "Chris Pumphrey"}, to: {name: "Charm City FC" }) {
            from{
                name
            }
        } 
        pt18: AddTeamPlayers( from: {name: "Daniel Reiner"}, to: {name: "Charm City FC" }) {
            from{
                name
            }
        }
        pt19: AddTeamPlayers( from: {name: "Samuel Souvannason"}, to: {name: "Charm City FC" }) {
            from{
                name
            }
        }
        pt20: AddTeamPlayers( from: {name: "Chris Tenneson"}, to: {name: "Charm City FC" }) {
            from{
                name
            }
        }
}`;
export default {
    seedNodeMutations,
    seedRelationshipMutations
};
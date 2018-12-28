const seedMutations = /* GraphQL */ `
    mutation {
        p1: CreatePlayer(Name: "Sina") {
            Name
        }
        p2: CreatePlayer(Name: "Brent") {
            Name
        }
        p3: CreatePlayer(Name: "Jessica") {
            Name
        }
        p4: CreatePlayer(Name: "Kevin") {
            Name
        }
        p5: CreatePlayer(Name: "Angelo") {
            Name
        }
        p6: CreatePlayer(Name: "Matt") {
            Name
        }
        p7: CreatePlayer(Name: "Jack") {
            Name
        }
        p8: CreatePlayer(Name: "Tay") {
            Name
        }
        p9: CreatePlayer(Name: "Lauren") {
            Name
        }
        p10: CreatePlayer(Name: "Mia") {
            Name
        }
        t1: CreateTeam(Name: "Kicks and giggles") {
            Name
        }
        pt1: AddTeamPlayers( from: {Name: "Sina"}, to: {Name: "Kicks and giggles"}) {
            from{
                Name
            }
        } 
        pt2: AddTeamPlayers( from: {Name: "Jessica"}, to: {Name: "Kicks and giggles"}) {
            from{
                Name
            }
        } 
        pt3: AddTeamPlayers( from: {Name: "Brent"}, to: {Name: "Kicks and giggles" }) {
            from{
                Name
            }
        } 
        pt4: AddTeamPlayers( from: {Name: "Kevin"}, to: {Name: "Kicks and giggles" }) {
            from{
                Name
            }
        } 
        pt5: AddTeamPlayers( from: {Name: "Angelo"}, to: {Name: "Kicks and giggles" }) {
            from{
                Name
            }
        } 
        pt6: AddTeamPlayers( from: {Name: "Matt"}, to: {Name: "Kicks and giggles" }) {
            from{
                Name
            }
        } 
        pt7: AddTeamPlayers( from: {Name: "Jack"}, to: {Name: "Kicks and giggles" }) {
            from{
                Name
            }
        } 
        pt8: AddTeamPlayers( from: {Name: "Lauren"}, to: {Name: "Kicks and giggles" }) {
            from{
                Name
            }
        }
        pt9: AddTeamPlayers( from: {Name: "Mia"}, to: {Name: "Kicks and giggles" }) {
            from{
                Name
            }
        }
        pt10: AddTeamPlayers( from: {Name: "Tay"}, to: {Name: "Kicks and giggles" }) {
            from{
                Name
            }
        }
        p11: CreatePlayer(Name: "Jessica Cades") {
            Name
        }
        p12: CreatePlayer(Name: "Kim Ambrose") {
            Name
        }
        p13: CreatePlayer(Name: "Hattie DeLisle") {
            Name
        }
        p14: CreatePlayer(Name: "Matt Hamilton") {
            Name
        }
        p15: CreatePlayer(Name: "Beth Mahr") {
            Name
        }
        p16: CreatePlayer(Name: "Ryan Michael") {
            Name
        }
        p17: CreatePlayer(Name: "Chris Pumphrey") {
            Name
        }
        p18: CreatePlayer(Name: "Daniel Reiner") {
            Name
        }
        p19: CreatePlayer(Name: "Samuel Souvannason") {
            Name
        }
        p20: CreatePlayer(Name: "Chris Tenneson") {
            Name
        }
        t2: CreateTeam(Name: "Charm City FC") {
            Name
        }
        pt11: AddTeamPlayers( from: {Name: "Jessica Cades"}, to: {Name: "Charm City FC"}) {
            from{
                Name
            }
        } 
        pt12: AddTeamPlayers( from: {Name: "Kim Ambrose"}, to: {Name: "Charm City FC"}) {
            from{
                Name
            }
        } 
        pt13: AddTeamPlayers( from: {Name: "Hattie DeLisle"}, to: {Name: "Charm City FC" }) {
            from{
                Name
            }
        } 
        pt14: AddTeamPlayers( from: {Name: "Matt Hamilton"}, to: {Name: "Charm City FC" }) {
            from{
                Name
            }
        } 
        pt15: AddTeamPlayers( from: {Name: "Beth Mahr"}, to: {Name: "Charm City FC" }) {
            from{
                Name
            }
        } 
        pt16: AddTeamPlayers( from: {Name: "Ryan Michael"}, to: {Name: "Charm City FC" }) {
            from{
                Name
            }
        } 
        pt17: AddTeamPlayers( from: {Name: "Chris Pumphrey"}, to: {Name: "Charm City FC" }) {
            from{
                Name
            }
        } 
        pt18: AddTeamPlayers( from: {Name: "Daniel Reiner"}, to: {Name: "Charm City FC" }) {
            from{
                Name
            }
        }
        pt19: AddTeamPlayers( from: {Name: "Samuel Souvannason"}, to: {Name: "Charm City FC" }) {
            from{
                Name
            }
        }
        pt20: AddTeamPlayers( from: {Name: "Chris Tenneson"}, to: {Name: "Charm City FC" }) {
            from{
                Name
            }
        }
        g1: CreateGame(DateTime:{formatted: "2019-01-01T07:25:16.766Z"}){
            DateTime{
              formatted
            },
            Teams{
              Name
            }
        }
    }
`;
export default seedMutations;
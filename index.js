class Member {
    constructor(name, position) {
        this.name = name;
        this.position = position;
    }
}

class Team {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.members = {};
    }

    addMember(member) {
        this.members.push(member);
    }

    deleteMember(member) {
        let index = this.members.indexOf(member);
        this.members.splice(index, 1);
    }
}

let teams = [];
let teamId = 0;

onClick('new-team', () => {
    teams.push(new Team(teamId++, getValue('new-team-name')));
});

function onClick(id, action) {
    let element = document.getElementById(id);
    element.addEventListener('click', action);
    return element;
}

function getValue(id) {
    return document.getElementById(id).value;
}
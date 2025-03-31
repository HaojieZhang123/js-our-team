const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

// function to create cards
const createMemberCard = (member) => {
  const card = `<div class="col-12 col-md-6 col-lg-4">
                  <div class="member-card d-flex">
                    <div class="member-image">
                        <img src="./${member.img}" alt="">
                    </div>
                    <div class="member-info">
                        <div class="name">${member.name}</div>
                        <div>${member.role}</div>
                        <a href="#" class="email">${member.email}</a>
                    </div>
                  </div>
                </div>`

  return card
}

// function to display all team's cards
const renderTeam = (teamMembers) => {
  let cards = '';

  for (let i = 0; i < teamMembers.length; i++) {
    cards += createMemberCard(teamMembers[i]);
  }

  document.getElementById('cards-container').innerHTML = cards;
}

// call function to display cards
renderTeam(teamMembers);
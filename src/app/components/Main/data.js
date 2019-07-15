const lt = {
  profile: {
    title: 'Anketa',
    text:
      'Chupa chups caramels chocolate bar muffin candy bear claw. Carrot cake sweet roll oat cake dragée fruitcake cookie macaroon powder. Chocolate sesame snaps caramels pastry. Candy canes  pie carrot cake brownie cake cupcake sweet. Marshmallow candy canes danish caramels muffin sesame snaps donut.',

  },
  contacts: {
    title: 'Kontaktai',
    content: [
      { label: 'Adresas', text: 'Rainbow st. 96, New Sidney' },
      { label: 'Phone', text: '+453352453839', href: 'tel:+453352453839' },
      {
        label: 'Email',
        text: 'test@dummy.com',
        href: 'mailto:test@dummy.com?subject=Hello from website',
      },
      {
        label: 'GitHub',
        text: 'Mindaugas-Jacionis',
        href: 'https://github.com/mindaugas-jacionis/',
        target: '_blank',
      },
      {
        label: 'Linkedin',
        text: 'Mindaugas Jačionis',
        href: 'https://www.linkedin.com/in/mindaugas-jačionis-b866ab57',
        target: '_blank',
      },
    ],
  },
  skills: {
    title: 'Igudziai',
    content: [
      [{ tag: 'span', children: 'Sleeping' }, { tag: 'span', children: 'Advanced' }],
      [{ tag: 'span', children: 'Eating' }, { tag: 'span', children: 'Intermediate' }],
      [{ tag: 'span', children: 'Running' }, { tag: 'span', children: 'Beginner' }],
      [{ tag: 'span', children: 'Driving' }, { tag: 'span', children: 'Advanced' }],
      [{ tag: 'span', children: 'Working' }, { tag: 'span', children: 'Beginner' }],
    ],
  },
  education: {
    title: 'Issilavinimas',
    content: [
      [
        { tag: 'p', children: 'Hogwarts School of Witchcraft and Wizardry - 2013' },
        { tag: 'p', children: 'Defense Against Dark Arts' },
      ],
      [
        { tag: 'p', children: 'Code Academy, Vilnius - 2019' },
        { tag: 'p', children: 'FrontEnd Engineering' },
      ],
      [
        { tag: 'p', children: 'Disco Dance School 3000 - 2019' },
        { tag: 'p', children: 'Shake Shake Shake' },
      ],
    ],
  },
  experience: {
    title: 'Patirtis',
    content: [
      [
        { tag: 'p', children: 'UAB Twitter • 2019.01 - Present' },
        { tag: 'p', children: 'FrontEnd Rockstar' },
      ],
      [
        { tag: 'p', children: 'Uber Eats • 2017.01 - 2019.01' },
        { tag: 'p', children: 'Eating mySQL DBs' },
      ],
      [
        { tag: 'p', children: 'UAB Adform • 2016.01 - 2017.01' },
        { tag: 'p', children: 'Web Tracking Guru' },
      ],
    ],
  },
};
const en = {
  profile: {
    title: 'Profile',
    text:
      'Chupa chups caramels chocolate bar muffin candy bear claw. Carrot cake sweet roll oat cake dragée fruitcake cookie macaroon powder. Chocolate sesame snaps caramels pastry. Candy canes  pie carrot cake brownie cake cupcake sweet. Marshmallow candy canes danish caramels muffin sesame snaps donut.',

  },
  contacts: {
    title: 'Contacts',
    content: [
      { label: 'Address', text: 'Rainbow st. 96, New Sidney' },
      { label: 'Phone', text: '+453352453839', href: 'tel:+453352453839' },
      {
        label: 'Email',
        text: 'test@dummy.com',
        href: 'mailto:test@dummy.com?subject=Hello from website',
      },
      {
        label: 'GitHub',
        text: 'Mindaugas-Jacionis',
        href: 'https://github.com/mindaugas-jacionis/',
        target: '_blank',
      },
      {
        label: 'Linkedin',
        text: 'Mindaugas Jačionis',
        href: 'https://www.linkedin.com/in/mindaugas-jačionis-b866ab57',
        target: '_blank',
      },
    ],
  },
  skills: {
    title: 'Skills',
    content: [
      [{ tag: 'span', children: 'Sleeping' }, { tag: 'span', children: 'Advanced' }],
      [{ tag: 'span', children: 'Eating' }, { tag: 'span', children: 'Intermediate' }],
      [{ tag: 'span', children: 'Running' }, { tag: 'span', children: 'Beginner' }],
      [{ tag: 'span', children: 'Driving' }, { tag: 'span', children: 'Advanced' }],
      [{ tag: 'span', children: 'Working' }, { tag: 'span', children: 'Beginner' }],
    ],
  },
  education: {
    title: 'Education',
    content: [
      [
        { tag: 'p', children: 'Hogwarts School of Witchcraft and Wizardry - 2013' },
        { tag: 'p', children: 'Defense Against Dark Arts' },
      ],
      [
        { tag: 'p', children: 'Code Academy, Vilnius - 2019' },
        { tag: 'p', children: 'FrontEnd Engineering' },
      ],
      [
        { tag: 'p', children: 'Disco Dance School 3000 - 2019' },
        { tag: 'p', children: 'Shake Shake Shake' },
      ],
    ],
  },
  experience: {
    title: 'Work Experience',
    content: [
      [
        { tag: 'p', children: 'UAB Twitter • 2019.01 - Present' },
        { tag: 'p', children: 'FrontEnd Rockstar' },
      ],
      [
        { tag: 'p', children: 'Uber Eats • 2017.01 - 2019.01' },
        { tag: 'p', children: 'Eating mySQL DBs' },
      ],
      [
        { tag: 'p', children: 'UAB Adform • 2016.01 - 2017.01' },
        { tag: 'p', children: 'Web Tracking Guru' },
      ],
    ],
  },
};

export default { en, lt };

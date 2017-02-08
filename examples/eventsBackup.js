// will need js function to transfer day into JS date object so React can read it 

var events = [
  {
    'title': 'Omer the King!!!!!',
    'start': new Date(Date.parse("2017-01-27T00:00:00")),
    'end': new Date(2017, 0, 22, 4, 0, 0, 0),
    'type': 'Communication',
    desc: 'Communicating with other life forms'
  },
  {
    'title': 'Botanical Duty - 1, 3, 5, 6',
    'start': new Date(2017, 0, 22, 0, 0, 0, 0),
    'end': new Date(2017, 0, 22, 4, 0, 0, 0),
    'type': 'Botanical',
    desc: 'Tending to crops'
  },
  {
    'title': 'Engineering Duty',
    'start': new Date(2017, 0, 22, 0, 0, 0, 0),
    'end': new Date(2017, 0, 22, 4, 0, 0, 0),
    'type': 'Engineering',
    desc: 'Building the Colony'
  },
  {
    'title': 'Security Duty',
    'start': new Date(2017, 0, 22, 0, 0, 0, 0),
    'end': new Date(2017, 0, 22, 4, 0, 0, 0),
    'type': 'Security',
    desc: 'Colonizing Mars'
  },
  {
    'title': 'Communication Duty',
    'start': new Date(2017, 0, 22, 4, 0, 0, 0),
    'end': new Date(2017, 0, 22, 8, 0, 0, 0),
    'type': 'Communication',
    desc: 'Communicating with other life forms'
  },
  {
    'title': 'Botanical Duty - 1, 3, 5, 6',
    'start': new Date(2017, 0, 22, 4, 0, 0, 0),
    'end': new Date(2017, 0, 22, 8, 0, 0, 0),
    'type': 'Botanical',
    desc: 'Tending to crops'
  },
  {
    'title': 'Engineering Duty',
    'start': new Date(2017, 0, 22, 4, 0, 0, 0),
    'end': new Date(2017, 0, 22, 8, 0, 0, 0),
    'type': 'Engineering',
    desc: 'Building the Colony'
  },
  {
    'title': 'Security Duty',
    'start': new Date(2017, 0, 22, 4, 0, 0, 0),
    'end': new Date(2017, 0, 22, 8, 0, 0, 0),
    'type': 'Security',
    desc: 'Colonizing Mars'
  },
  {
    'title': 'Communication Duty',
    'start': new Date(2017, 0, 22, 8, 0, 0, 0),
    'end': new Date(2017, 0, 22, 12, 0, 0, 0),
    'type': 'Communication',
    desc: 'Communicating with other life forms'
  },
  {
    'title': 'Botanical Duty - 1, 3, 5, 6',
    'start': new Date(2017, 0, 22, 8, 0, 0, 0),
    'end': new Date(2017, 0, 22, 12, 0, 0, 0),
    'type': 'Botanical',
    desc: 'Tending to crops'
  },
  {
    'title': 'Engineering Duty',
    'start': new Date(2017, 0, 22, 8, 0, 0, 0),
    'end': new Date(2017, 0, 22, 12, 0, 0, 0),
    'type': 'Engineering',
    desc: 'Building the Colony'
  },
  {
    'title': 'Security Duty',
    'start': new Date(2017, 0, 22, 8, 0, 0, 0),
    'end': new Date(2017, 0, 22, 12, 0, 0, 0),
    'type': 'Security',
    desc: 'Colonizing Mars'
  },
  {
    'title': 'Communication Duty',
    'start': new Date(2017, 0, 22, 12, 0, 0, 0),
    'end': new Date(2017, 0, 22, 16, 0, 0, 0),
    'type': 'Communication',
    desc: 'Communicating with other life forms'
  },
  {
    'title': 'Botanical Duty - 1, 3, 5, 6',
    'start': new Date(2017, 0, 22, 12, 0, 0, 0),
    'end': new Date(2017, 0, 22, 16, 0, 0, 0),
    'type': 'Botanical',
    desc: 'Tending to crops'
  },
  {
    'title': 'Engineering Duty',
    'start': new Date(2017, 0, 22, 12, 0, 0, 0),
    'end': new Date(2017, 0, 22, 16, 0, 0, 0),
    'type': 'Engineering',
    desc: 'Building the Colony'
  },
  {
    'title': 'Security Duty',
    'start': new Date(2017, 0, 22, 12, 0, 0, 0),
    'end': new Date(2017, 0, 22, 16, 0, 0, 0),
    'type': 'Security',
    desc: 'Colonizing Mars'
  },
  {
    'title': 'Communication Duty',
    'start': new Date(2017, 0, 22, 16, 0, 0, 0),
    'end': new Date(2017, 0, 22, 20, 0, 0, 0),
    'type': 'Communication',
    desc: 'Communicating with other life forms'
  },
  {
    'title': 'Botanical Duty - 1, 3, 5, 6',
    'start': new Date(2017, 0, 22, 16, 0, 0, 0),
    'end': new Date(2017, 0, 22, 20, 0, 0, 0),
    'type': 'Botanical',
    desc: 'Tending to crops'
  },
  {
    'title': 'Engineering Duty',
    'start': new Date(2017, 0, 22, 16, 0, 0, 0),
    'end': new Date(2017, 0, 22, 20, 0, 0, 0),
    'type': 'Engineering',
    desc: 'Building the Colony'
  },
  {
    'title': 'Security Duty',
    'start': new Date(2017, 0, 22, 16, 0, 0, 0),
    'end': new Date(2017, 0, 22, 20, 0, 0, 0),
    'type': 'Security',
    desc: 'Colonizing Mars'
  },
  {
    'title': 'Communication Duty',
    'start': new Date(2017, 0, 22, 20, 0, 0, 0),
    'end': new Date(2017, 0, 22, 23, 59, 0, 0),
    'type': 'Communication',
    desc: 'Communicating with other life forms'
  },
  {
    'title': 'Botanical Duty - 1, 3, 5, 6',
    'start': new Date(2017, 0, 22, 20, 0, 0, 0),
    'end': new Date(2017, 0, 22, 23, 59, 0, 0),
    'type': 'Botanical',
    desc: 'Tending to crops'
  },
  {
    'title': 'Engineering Duty',
    'start': new Date(2017, 0, 22, 20, 0, 0, 0),
    'end': new Date(2017, 0, 22, 23, 59, 0, 0),
    'type': 'Engineering',
    desc: 'Building the Colony'
  },
  {
    'title': 'Security Duty',
    'start': new Date(2017, 0, 22, 20, 0, 0, 0),
    'end': new Date(2017, 0, 22, 23, 59, 0, 0),
    'type': 'Security',
    desc: 'Colonizing Mars'
  }, // ************************ NEW DAY ************************
  {
    'title': 'Communication Duty',
    'start': new Date(2017, 0, 23, 0, 0, 0, 0),
    'end': new Date(2017, 0, 23, 4, 0, 0, 0),
    'type': 'Communication',
    desc: 'Communicating with other life forms'
  },
  {
    'title': 'Botanical Duty - 1, 3, 5, 6',
    'start': new Date(2017, 0, 23, 0, 0, 0, 0),
    'end': new Date(2017, 0, 23, 4, 0, 0, 0),
    'type': 'Botanical',
    desc: 'Tending to crops'
  },
  {
    'title': 'Engineering Duty',
    'start': new Date(2017, 0, 23, 0, 0, 0, 0),
    'end': new Date(2017, 0, 23, 4, 0, 0, 0),
    'type': 'Engineering',
    desc: 'Building the Colony'
  },
  {
    'title': 'Security Duty',
    'start': new Date(2017, 0, 23, 0, 0, 0, 0),
    'end': new Date(2017, 0, 23, 4, 0, 0, 0),
    'type': 'Security',
    desc: 'Colonizing Mars'
  },
  {
    'title': 'Communication Duty',
    'start': new Date(2017, 0, 23, 4, 0, 0, 0),
    'end': new Date(2017, 0, 23, 8, 0, 0, 0),
    'type': 'Communication',
    desc: 'Communicating with other life forms'
  },
  {
    'title': 'Botanical Duty - 1, 3, 5, 6',
    'start': new Date(2017, 0, 23, 4, 0, 0, 0),
    'end': new Date(2017, 0, 23, 8, 0, 0, 0),
    'type': 'Botanical',
    desc: 'Tending to crops'
  },
  {
    'title': 'Engineering Duty',
    'start': new Date(2017, 0, 23, 4, 0, 0, 0),
    'end': new Date(2017, 0, 23, 8, 0, 0, 0),
    'type': 'Engineering',
    desc: 'Building the Colony'
  },
  {
    'title': 'Security Duty',
    'start': new Date(2017, 0, 23, 4, 0, 0, 0),
    'end': new Date(2017, 0, 23, 8, 0, 0, 0),
    'type': 'Security',
    desc: 'Colonizing Mars'
  },
  {
    'title': 'Communication Duty',
    'start': new Date(2017, 0, 23, 8, 0, 0, 0),
    'end': new Date(2017, 0, 23, 12, 0, 0, 0),
    'type': 'Communication',
    desc: 'Communicating with other life forms'
  },
  {
    'title': 'Botanical Duty - 1, 3, 5, 6',
    'start': new Date(2017, 0, 23, 8, 0, 0, 0),
    'end': new Date(2017, 0, 23, 12, 0, 0, 0),
    'type': 'Botanical',
    desc: 'Tending to crops'
  },
  {
    'title': 'Engineering Duty',
    'start': new Date(2017, 0, 23, 8, 0, 0, 0),
    'end': new Date(2017, 0, 23, 12, 0, 0, 0),
    'type': 'Engineering',
    desc: 'Building the Colony'
  },
  {
    'title': 'Security Duty',
    'start': new Date(2017, 0, 23, 8, 0, 0, 0),
    'end': new Date(2017, 0, 23, 12, 0, 0, 0),
    'type': 'Security',
    desc: 'Colonizing Mars'
  },
  {
    'title': 'Communication Duty',
    'start': new Date(2017, 0, 23, 12, 0, 0, 0),
    'end': new Date(2017, 0, 23, 16, 0, 0, 0),
    'type': 'Communication',
    desc: 'Communicating with other life forms'
  },
  {
    'title': 'Botanical Duty - 1, 3, 5, 6',
    'start': new Date(2017, 0, 23, 12, 0, 0, 0),
    'end': new Date(2017, 0, 23, 16, 0, 0, 0),
    'type': 'Botanical',
    desc: 'Tending to crops'
  },
  {
    'title': 'Engineering Duty',
    'start': new Date(2017, 0, 23, 12, 0, 0, 0),
    'end': new Date(2017, 0, 23, 16, 0, 0, 0),
    'type': 'Engineering',
    desc: 'Building the Colony'
  },
  {
    'title': 'Security Duty',
    'start': new Date(2017, 0, 23, 12, 0, 0, 0),
    'end': new Date(2017, 0, 23, 16, 0, 0, 0),
    'type': 'Security',
    desc: 'Colonizing Mars'
  },
  {
    'title': 'Communication Duty',
    'start': new Date(2017, 0, 23, 16, 0, 0, 0),
    'end': new Date(2017, 0, 23, 20, 0, 0, 0),
    'type': 'Communication',
    desc: 'Communicating with other life forms'
  },
  {
    'title': 'Botanical Duty - 1, 3, 5, 6',
    'start': new Date(2017, 0, 23, 16, 0, 0, 0),
    'end': new Date(2017, 0, 23, 20, 0, 0, 0),
    'type': 'Botanical',
    desc: 'Tending to crops'
  },
  {
    'title': 'Engineering Duty',
    'start': new Date(2017, 0, 23, 16, 0, 0, 0),
    'end': new Date(2017, 0, 23, 20, 0, 0, 0),
    'type': 'Engineering',
    desc: 'Building the Colony'
  },
  {
    'title': 'Security Duty',
    'start': new Date(2017, 0, 23, 16, 0, 0, 0),
    'end': new Date(2017, 0, 23, 20, 0, 0, 0),
    'type': 'Security',
    desc: 'Colonizing Mars'
  },
  {
    'title': 'Communication Duty',
    'start': new Date(2017, 0, 23, 20, 0, 0, 0),
    'end': new Date(2017, 0, 23, 23, 59, 0, 0),
    'type': 'Communication',
    desc: 'Communicating with other life forms'
  },
  {
    'title': 'Botanical Duty - 1, 3, 5, 6',
    'start': new Date(2017, 0, 23, 20, 0, 0, 0),
    'end': new Date(2017, 0, 23, 23, 59, 0, 0),
    'type': 'Botanical',
    desc: 'Tending to crops'
  },
  {
    'title': 'Engineering Duty',
    'start': new Date(2017, 0, 23, 20, 0, 0, 0),
    'end': new Date(2017, 0, 23, 23, 59, 0, 0),
    'type': 'Engineering',
    desc: 'Building the Colony'
  },
  {
    'title': 'Security Duty',
    'start': new Date(2017, 0, 23, 20, 0, 0, 0),
    'end': new Date(2017, 0, 23, 23, 59, 0, 0),
    'type': 'Security',
    desc: 'Colonizing Mars'
  }, // ************************ NEW DAY ************************
  {
    'title': 'Communication Duty',
    'start': new Date(2017, 0, 24, 0, 0, 0, 0),
    'end': new Date(2017, 0, 24, 4, 0, 0, 0),
    'type': 'Communication',
    desc: 'Communicating with other life forms'
  },
  {
    'title': 'Botanical Duty - 1, 3, 5, 6',
    'start': new Date(2017, 0, 24, 0, 0, 0, 0),
    'end': new Date(2017, 0, 24, 4, 0, 0, 0),
    'type': 'Botanical',
    desc: 'Tending to crops'
  },
  {
    'title': 'Engineering Duty',
    'start': new Date(2017, 0, 24, 0, 0, 0, 0),
    'end': new Date(2017, 0, 24, 4, 0, 0, 0),
    'type': 'Engineering',
    desc: 'Building the Colony'
  },
  {
    'title': 'Security Duty',
    'start': new Date(2017, 0, 24, 0, 0, 0, 0),
    'end': new Date(2017, 0, 24, 4, 0, 0, 0),
    'type': 'Security',
    desc: 'Colonizing Mars'
  },
  {
    'title': 'Communication Duty',
    'start': new Date(2017, 0, 24, 4, 0, 0, 0),
    'end': new Date(2017, 0, 24, 8, 0, 0, 0),
    'type': 'Communication',
    desc: 'Communicating with other life forms'
  },
  {
    'title': 'Botanical Duty - 1, 3, 5, 6',
    'start': new Date(2017, 0, 24, 4, 0, 0, 0),
    'end': new Date(2017, 0, 24, 8, 0, 0, 0),
    'type': 'Botanical',
    desc: 'Tending to crops'
  },
  {
    'title': 'Engineering Duty',
    'start': new Date(2017, 0, 24, 4, 0, 0, 0),
    'end': new Date(2017, 0, 24, 8, 0, 0, 0),
    'type': 'Engineering',
    desc: 'Building the Colony'
  },
  {
    'title': 'Security Duty',
    'start': new Date(2017, 0, 24, 4, 0, 0, 0),
    'end': new Date(2017, 0, 24, 8, 0, 0, 0),
    'type': 'Security',
    desc: 'Colonizing Mars'
  },
  {
    'title': 'Communication Duty',
    'start': new Date(2017, 0, 24, 8, 0, 0, 0),
    'end': new Date(2017, 0, 24, 12, 0, 0, 0),
    'type': 'Communication',
    desc: 'Communicating with other life forms'
  },
  {
    'title': 'Botanical Duty - 1, 3, 5, 6',
    'start': new Date(2017, 0, 24, 8, 0, 0, 0),
    'end': new Date(2017, 0, 24, 12, 0, 0, 0),
    'type': 'Botanical',
    desc: 'Tending to crops'
  },
  {
    'title': 'Engineering Duty',
    'start': new Date(2017, 0, 24, 8, 0, 0, 0),
    'end': new Date(2017, 0, 24, 12, 0, 0, 0),
    'type': 'Engineering',
    desc: 'Building the Colony'
  },
  {
    'title': 'Security Duty',
    'start': new Date(2017, 0, 24, 8, 0, 0, 0),
    'end': new Date(2017, 0, 24, 12, 0, 0, 0),
    'type': 'Security',
    desc: 'Colonizing Mars'
  },
  {
    'title': 'Communication Duty',
    'start': new Date(2017, 0, 24, 12, 0, 0, 0),
    'end': new Date(2017, 0, 24, 16, 0, 0, 0),
    'type': 'Communication',
    desc: 'Communicating with other life forms'
  },
  {
    'title': 'Botanical Duty - 1, 3, 5, 6',
    'start': new Date(2017, 0, 24, 12, 0, 0, 0),
    'end': new Date(2017, 0, 24, 16, 0, 0, 0),
    'type': 'Botanical',
    desc: 'Tending to crops'
  },
  {
    'title': 'Engineering Duty',
    'start': new Date(2017, 0, 24, 12, 0, 0, 0),
    'end': new Date(2017, 0, 24, 16, 0, 0, 0),
    'type': 'Engineering',
    desc: 'Building the Colony'
  },
  {
    'title': 'Security Duty',
    'start': new Date(2017, 0, 24, 12, 0, 0, 0),
    'end': new Date(2017, 0, 24, 16, 0, 0, 0),
    'type': 'Security',
    desc: 'Colonizing Mars'
  },
  {
    'title': 'Communication Duty',
    'start': new Date(2017, 0, 24, 16, 0, 0, 0),
    'end': new Date(2017, 0, 24, 20, 0, 0, 0),
    'type': 'Communication',
    desc: 'Communicating with other life forms'
  },
  {
    'title': 'Botanical Duty - 1, 3, 5, 6',
    'start': new Date(2017, 0, 24, 16, 0, 0, 0),
    'end': new Date(2017, 0, 24, 20, 0, 0, 0),
    'type': 'Botanical',
    desc: 'Tending to crops'
  },
  {
    'title': 'Engineering Duty',
    'start': new Date(2017, 0, 24, 16, 0, 0, 0),
    'end': new Date(2017, 0, 24, 20, 0, 0, 0),
    'type': 'Engineering',
    desc: 'Building the Colony'
  },
  {
    'title': 'Security Duty',
    'start': new Date(2017, 0, 24, 16, 0, 0, 0),
    'end': new Date(2017, 0, 24, 20, 0, 0, 0),
    'type': 'Security',
    desc: 'Colonizing Mars'
  },
  {
    'title': 'Communication Duty',
    'start': new Date(2017, 0, 24, 20, 0, 0, 0),
    'end': new Date(2017, 0, 24, 23, 59, 0, 0),
    'type': 'Communication',
    desc: 'Communicating with other life forms'
  },
  {
    'title': 'Botanical Duty - 1, 3, 5, 6',
    'start': new Date(2017, 0, 24, 20, 0, 0, 0),
    'end': new Date(2017, 0, 24, 23, 59, 0, 0),
    'type': 'Botanical',
    desc: 'Tending to crops'
  },
  {
    'title': 'Engineering Duty',
    'start': new Date(2017, 0, 24, 20, 0, 0, 0),
    'end': new Date(2017, 0, 24, 23, 59, 0, 0),
    'type': 'Engineering',
    desc: 'Building the Colony'
  },
  {
    'title': 'Security Duty',
    'start': new Date(2017, 0, 24, 20, 0, 0, 0),
    'end': new Date(2017, 0, 24, 23, 59, 0, 0),
    'type': 'Security',
    desc: 'Colonizing Mars'
  }, // ************************ NEW DAY ************************
  {
    'title': 'Communication Duty',
    'start': new Date(2017, 0, 25, 0, 0, 0, 0),
    'end': new Date(2017, 0, 25, 4, 0, 0, 0),
    'type': 'Communication',
    desc: 'Communicating with other life forms'
  },
  {
    'title': 'Botanical Duty - 1, 3, 5, 6',
    'start': new Date(2017, 0, 25, 0, 0, 0, 0),
    'end': new Date(2017, 0, 25, 4, 0, 0, 0),
    'type': 'Botanical',
    desc: 'Tending to crops'
  },
  {
    'title': 'Engineering Duty',
    'start': new Date(2017, 0, 25, 0, 0, 0, 0),
    'end': new Date(2017, 0, 25, 4, 0, 0, 0),
    'type': 'Engineering',
    desc: 'Building the Colony'
  },
  {
    'title': 'Security Duty',
    'start': new Date(2017, 0, 25, 0, 0, 0, 0),
    'end': new Date(2017, 0, 25, 4, 0, 0, 0),
    'type': 'Security',
    desc: 'Colonizing Mars'
  },
  {
    'title': 'Communication Duty',
    'start': new Date(2017, 0, 25, 4, 0, 0, 0),
    'end': new Date(2017, 0, 25, 8, 0, 0, 0),
    'type': 'Communication',
    desc: 'Communicating with other life forms'
  },
  {
    'title': 'Botanical Duty - 1, 3, 5, 6',
    'start': new Date(2017, 0, 25, 4, 0, 0, 0),
    'end': new Date(2017, 0, 25, 8, 0, 0, 0),
    'type': 'Botanical',
    desc: 'Tending to crops'
  },
  {
    'title': 'Engineering Duty',
    'start': new Date(2017, 0, 25, 4, 0, 0, 0),
    'end': new Date(2017, 0, 25, 8, 0, 0, 0),
    'type': 'Engineering',
    desc: 'Building the Colony'
  },
  {
    'title': 'Security Duty',
    'start': new Date(2017, 0, 25, 4, 0, 0, 0),
    'end': new Date(2017, 0, 25, 8, 0, 0, 0),
    'type': 'Security',
    desc: 'Colonizing Mars'
  },
  {
    'title': 'Communication Duty',
    'start': new Date(2017, 0, 25, 8, 0, 0, 0),
    'end': new Date(2017, 0, 25, 12, 0, 0, 0),
    'type': 'Communication',
    desc: 'Communicating with other life forms'
  },
  {
    'title': 'Botanical Duty - 1, 3, 5, 6',
    'start': new Date(2017, 0, 25, 8, 0, 0, 0),
    'end': new Date(2017, 0, 25, 12, 0, 0, 0),
    'type': 'Botanical',
    desc: 'Tending to crops'
  },
  {
    'title': 'Engineering Duty',
    'start': new Date(2017, 0, 25, 8, 0, 0, 0),
    'end': new Date(2017, 0, 25, 12, 0, 0, 0),
    'type': 'Engineering',
    desc: 'Building the Colony'
  },
  {
    'title': 'Security Duty',
    'start': new Date(2017, 0, 25, 8, 0, 0, 0),
    'end': new Date(2017, 0, 25, 12, 0, 0, 0),
    'type': 'Security',
    desc: 'Colonizing Mars'
  },
  {
    'title': 'Communication Duty',
    'start': new Date(2017, 0, 25, 12, 0, 0, 0),
    'end': new Date(2017, 0, 25, 16, 0, 0, 0),
    'type': 'Communication',
    desc: 'Communicating with other life forms'
  },
  {
    'title': 'Botanical Duty - 1, 3, 5, 6',
    'start': new Date(2017, 0, 25, 12, 0, 0, 0),
    'end': new Date(2017, 0, 25, 16, 0, 0, 0),
    'type': 'Botanical',
    desc: 'Tending to crops'
  },
  {
    'title': 'Engineering Duty',
    'start': new Date(2017, 0, 25, 12, 0, 0, 0),
    'end': new Date(2017, 0, 25, 16, 0, 0, 0),
    'type': 'Engineering',
    desc: 'Building the Colony'
  },
  {
    'title': 'Security Duty',
    'start': new Date(2017, 0, 25, 12, 0, 0, 0),
    'end': new Date(2017, 0, 25, 16, 0, 0, 0),
    'type': 'Security',
    desc: 'Colonizing Mars'
  },
  {
    'title': 'Communication Duty',
    'start': new Date(2017, 0, 25, 16, 0, 0, 0),
    'end': new Date(2017, 0, 25, 20, 0, 0, 0),
    'type': 'Communication',
    desc: 'Communicating with other life forms'
  },
  {
    'title': 'Botanical Duty - 1, 3, 5, 6',
    'start': new Date(2017, 0, 25, 16, 0, 0, 0),
    'end': new Date(2017, 0, 25, 20, 0, 0, 0),
    'type': 'Botanical',
    desc: 'Tending to crops'
  },
  {
    'title': 'Engineering Duty',
    'start': new Date(2017, 0, 25, 16, 0, 0, 0),
    'end': new Date(2017, 0, 25, 20, 0, 0, 0),
    'type': 'Engineering',
    desc: 'Building the Colony'
  },
  {
    'title': 'Security Duty',
    'start': new Date(2017, 0, 25, 16, 0, 0, 0),
    'end': new Date(2017, 0, 25, 20, 0, 0, 0),
    'type': 'Security',
    desc: 'Colonizing Mars'
  },
  {
    'title': 'Communication Duty',
    'start': new Date(2017, 0, 25, 20, 0, 0, 0),
    'end': new Date(2017, 0, 25, 23, 59, 0, 0),
    'type': 'Communication',
    desc: 'Communicating with other life forms'
  },
  {
    'title': 'Botanical Duty - 1, 3, 5, 6',
    'start': new Date(2017, 0, 25, 20, 0, 0, 0),
    'end': new Date(2017, 0, 25, 23, 59, 0, 0),
    'type': 'Botanical',
    desc: 'Tending to crops'
  },
  {
    'title': 'Engineering Duty',
    'start': new Date(2017, 0, 25, 20, 0, 0, 0),
    'end': new Date(2017, 0, 25, 23, 59, 0, 0),
    'type': 'Engineering',
    desc: 'Building the Colony'
  },
  {
    'title': 'Security Duty',
    'start': new Date(2017, 0, 25, 20, 0, 0, 0),
    'end': new Date(2017, 0, 25, 23, 59, 0, 0),
    'type': 'Security',
    desc: 'Colonizing Mars'
  }, // ************************ NEW DAY ************************
  {
    'title': 'Communication Duty',
    'start': new Date(2017, 0, 26, 0, 0, 0, 0),
    'end': new Date(2017, 0, 26, 4, 0, 0, 0),
    'type': 'Communication',
    desc: 'Communicating with other life forms'
  },
  {
    'title': 'Botanical Duty - 1, 3, 5, 6',
    'start': new Date(2017, 0, 26, 0, 0, 0, 0),
    'end': new Date(2017, 0, 26, 4, 0, 0, 0),
    'type': 'Botanical',
    desc: 'Tending to crops'
  },
  {
    'title': 'Engineering Duty',
    'start': new Date(2017, 0, 26, 0, 0, 0, 0),
    'end': new Date(2017, 0, 26, 4, 0, 0, 0),
    'type': 'Engineering',
    desc: 'Building the Colony'
  },
  {
    'title': 'Security Duty',
    'start': new Date(2017, 0, 26, 0, 0, 0, 0),
    'end': new Date(2017, 0, 26, 4, 0, 0, 0),
    'type': 'Security',
    desc: 'Colonizing Mars'
  },
  {
    'title': 'Communication Duty',
    'start': new Date(2017, 0, 26, 4, 0, 0, 0),
    'end': new Date(2017, 0, 26, 8, 0, 0, 0),
    'type': 'Communication',
    desc: 'Communicating with other life forms'
  },
  {
    'title': 'Botanical Duty - 1, 3, 5, 6',
    'start': new Date(2017, 0, 26, 4, 0, 0, 0),
    'end': new Date(2017, 0, 26, 8, 0, 0, 0),
    'type': 'Botanical',
    desc: 'Tending to crops'
  },
  {
    'title': 'Engineering Duty',
    'start': new Date(2017, 0, 26, 4, 0, 0, 0),
    'end': new Date(2017, 0, 26, 8, 0, 0, 0),
    'type': 'Engineering',
    desc: 'Building the Colony'
  },
  {
    'title': 'Security Duty',
    'start': new Date(2017, 0, 26, 4, 0, 0, 0),
    'end': new Date(2017, 0, 26, 8, 0, 0, 0),
    'type': 'Security',
    desc: 'Colonizing Mars'
  },
  {
    'title': 'Communication Duty',
    'start': new Date(2017, 0, 26, 8, 0, 0, 0),
    'end': new Date(2017, 0, 26, 12, 0, 0, 0),
    'type': 'Communication',
    desc: 'Communicating with other life forms'
  },
  {
    'title': 'Botanical Duty - 1, 3, 5, 6',
    'start': new Date(2017, 0, 26, 8, 0, 0, 0),
    'end': new Date(2017, 0, 26, 12, 0, 0, 0),
    'type': 'Botanical',
    desc: 'Tending to crops'
  },
  {
    'title': 'Engineering Duty',
    'start': new Date(2017, 0, 26, 8, 0, 0, 0),
    'end': new Date(2017, 0, 26, 12, 0, 0, 0),
    'type': 'Engineering',
    desc: 'Building the Colony'
  },
  {
    'title': 'Security Duty',
    'start': new Date(2017, 0, 26, 8, 0, 0, 0),
    'end': new Date(2017, 0, 26, 12, 0, 0, 0),
    'type': 'Security',
    desc: 'Colonizing Mars'
  },
  {
    'title': 'Communication Duty',
    'start': new Date(2017, 0, 26, 12, 0, 0, 0),
    'end': new Date(2017, 0, 26, 16, 0, 0, 0),
    'type': 'Communication',
    desc: 'Communicating with other life forms'
  },
  {
    'title': 'Botanical Duty - 1, 3, 5, 6',
    'start': new Date(2017, 0, 26, 12, 0, 0, 0),
    'end': new Date(2017, 0, 26, 16, 0, 0, 0),
    'type': 'Botanical',
    desc: 'Tending to crops'
  },
  {
    'title': 'Engineering Duty',
    'start': new Date(2017, 0, 26, 12, 0, 0, 0),
    'end': new Date(2017, 0, 26, 16, 0, 0, 0),
    'type': 'Engineering',
    desc: 'Building the Colony'
  },
  {
    'title': 'Security Duty',
    'start': new Date(2017, 0, 26, 12, 0, 0, 0),
    'end': new Date(2017, 0, 26, 16, 0, 0, 0),
    'type': 'Security',
    desc: 'Colonizing Mars'
  },
  {
    'title': 'Communication Duty',
    'start': new Date(2017, 0, 26, 16, 0, 0, 0),
    'end': new Date(2017, 0, 26, 20, 0, 0, 0),
    'type': 'Communication',
    desc: 'Communicating with other life forms'
  },
  {
    'title': 'Botanical Duty - 1, 3, 5, 6',
    'start': new Date(2017, 0, 26, 16, 0, 0, 0),
    'end': new Date(2017, 0, 26, 20, 0, 0, 0),
    'type': 'Botanical',
    desc: 'Tending to crops'
  },
  {
    'title': 'Engineering Duty',
    'start': new Date(2017, 0, 26, 16, 0, 0, 0),
    'end': new Date(2017, 0, 26, 20, 0, 0, 0),
    'type': 'Engineering',
    desc: 'Building the Colony'
  },
  {
    'title': 'Security Duty',
    'start': new Date(2017, 0, 26, 16, 0, 0, 0),
    'end': new Date(2017, 0, 26, 20, 0, 0, 0),
    'type': 'Security',
    desc: 'Colonizing Mars'
  },
  {
    'title': 'Communication Duty',
    'start': new Date(2017, 0, 26, 20, 0, 0, 0),
    'end': new Date(2017, 0, 26, 23, 59, 0, 0),
    'type': 'Communication',
    desc: 'Communicating with other life forms'
  },
  {
    'title': 'Botanical Duty - 1, 3, 5, 6',
    'start': new Date(2017, 0, 26, 20, 0, 0, 0),
    'end': new Date(2017, 0, 26, 23, 59, 0, 0),
    'type': 'Botanical',
    desc: 'Tending to crops'
  },
  {
    'title': 'Engineering Duty',
    'start': new Date(2017, 0, 26, 20, 0, 0, 0),
    'end': new Date(2017, 0, 26, 23, 59, 0, 0),
    'type': 'Engineering',
    desc: 'Building the Colony'
  },
  {
    'title': 'Security Duty',
    'start': new Date(2017, 0, 26, 20, 0, 0, 0),
    'end': new Date(2017, 0, 26, 23, 59, 0, 0),
    'type': 'Security',
    desc: 'Colonizing Mars'
  }, // ************************ NEW DAY ************************
  {
    'title': 'Communication Duty',
    'start': new Date(2017, 0, 27, 0, 0, 0, 0),
    'end': new Date(2017, 0, 27, 4, 0, 0, 0),
    'type': 'Communication',
    desc: 'Communicating with other life forms'
  },
  {
    'title': 'Botanical Duty - 1, 3, 5, 6',
    'start': new Date(2017, 0, 27, 0, 0, 0, 0),
    'end': new Date(2017, 0, 27, 4, 0, 0, 0),
    'type': 'Botanical',
    desc: 'Tending to crops'
  },
  {
    'title': 'Engineering Duty',
    'start': new Date(2017, 0, 27, 0, 0, 0, 0),
    'end': new Date(2017, 0, 27, 4, 0, 0, 0),
    'type': 'Engineering',
    desc: 'Building the Colony'
  },
  {
    'title': 'Security Duty',
    'start': new Date(2017, 0, 27, 0, 0, 0, 0),
    'end': new Date(2017, 0, 27, 4, 0, 0, 0),
    'type': 'Security',
    desc: 'Colonizing Mars'
  },
  {
    'title': 'Communication Duty',
    'start': new Date(2017, 0, 27, 4, 0, 0, 0),
    'end': new Date(2017, 0, 27, 8, 0, 0, 0),
    'type': 'Communication',
    desc: 'Communicating with other life forms'
  },
  {
    'title': 'Botanical Duty - 1, 3, 5, 6',
    'start': new Date(2017, 0, 27, 4, 0, 0, 0),
    'end': new Date(2017, 0, 27, 8, 0, 0, 0),
    'type': 'Botanical',
    desc: 'Tending to crops'
  },
  {
    'title': 'Engineering Duty',
    'start': new Date(2017, 0, 27, 4, 0, 0, 0),
    'end': new Date(2017, 0, 27, 8, 0, 0, 0),
    'type': 'Engineering',
    desc: 'Building the Colony'
  },
  {
    'title': 'Security Duty',
    'start': new Date(2017, 0, 27, 4, 0, 0, 0),
    'end': new Date(2017, 0, 27, 8, 0, 0, 0),
    'type': 'Security',
    desc: 'Colonizing Mars'
  },
  {
    'title': 'Communication Duty',
    'start': new Date(2017, 0, 27, 8, 0, 0, 0),
    'end': new Date(2017, 0, 27, 12, 0, 0, 0),
    'type': 'Communication',
    desc: 'Communicating with other life forms'
  },
  {
    'title': 'Botanical Duty - 1, 3, 5, 6',
    'start': new Date(2017, 0, 27, 8, 0, 0, 0),
    'end': new Date(2017, 0, 27, 12, 0, 0, 0),
    'type': 'Botanical',
    desc: 'Tending to crops'
  },
  {
    'title': 'Engineering Duty',
    'start': new Date(2017, 0, 27, 8, 0, 0, 0),
    'end': new Date(2017, 0, 27, 12, 0, 0, 0),
    'type': 'Engineering',
    desc: 'Building the Colony'
  },
  {
    'title': 'Security Duty',
    'start': new Date(2017, 0, 27, 8, 0, 0, 0),
    'end': new Date(2017, 0, 27, 12, 0, 0, 0),
    'type': 'Security',
    desc: 'Colonizing Mars'
  },
  {
    'title': 'Communication Duty',
    'start': new Date(2017, 0, 27, 12, 0, 0, 0),
    'end': new Date(2017, 0, 27, 16, 0, 0, 0),
    'type': 'Communication',
    desc: 'Communicating with other life forms'
  },
  {
    'title': 'Botanical Duty - 1, 3, 5, 6',
    'start': new Date(2017, 0, 27, 12, 0, 0, 0),
    'end': new Date(2017, 0, 27, 16, 0, 0, 0),
    'type': 'Botanical',
    desc: 'Tending to crops'
  },
  {
    'title': 'Engineering Duty',
    'start': new Date(2017, 0, 27, 12, 0, 0, 0),
    'end': new Date(2017, 0, 27, 16, 0, 0, 0),
    'type': 'Engineering',
    desc: 'Building the Colony'
  },
  {
    'title': 'Security Duty',
    'start': new Date(2017, 0, 27, 12, 0, 0, 0),
    'end': new Date(2017, 0, 27, 16, 0, 0, 0),
    'type': 'Security',
    desc: 'Colonizing Mars'
  },
  {
    'title': 'Communication Duty',
    'start': new Date(2017, 0, 27, 16, 0, 0, 0),
    'end': new Date(2017, 0, 27, 20, 0, 0, 0),
    'type': 'Communication',
    desc: 'Communicating with other life forms'
  },
  {
    'title': 'Botanical Duty - 1, 3, 5, 6',
    'start': new Date(2017, 0, 27, 16, 0, 0, 0),
    'end': new Date(2017, 0, 27, 20, 0, 0, 0),
    'type': 'Botanical',
    desc: 'Tending to crops'
  },
  {
    'title': 'Engineering Duty',
    'start': new Date(2017, 0, 27, 16, 0, 0, 0),
    'end': new Date(2017, 0, 27, 20, 0, 0, 0),
    'type': 'Engineering',
    desc: 'Building the Colony'
  },
  {
    'title': 'Security Duty',
    'start': new Date(2017, 0, 27, 16, 0, 0, 0),
    'end': new Date(2017, 0, 27, 20, 0, 0, 0),
    'type': 'Security',
    desc: 'Colonizing Mars'
  },
  {
    'title': 'Communication Duty',
    'start': new Date(2017, 0, 27, 20, 0, 0, 0),
    'end': new Date(2017, 0, 27, 23, 59, 0, 0),
    'type': 'Communication',
    desc: 'Communicating with other life forms'
  },
  {
    'title': 'Botanical Duty - 1, 3, 5, 6',
    'start': new Date(2017, 0, 27, 20, 0, 0, 0),
    'end': new Date(2017, 0, 27, 23, 59, 0, 0),
    'type': 'Botanical',
    desc: 'Tending to crops'
  },
  {
    'title': 'Engineering Duty',
    'start': new Date(2017, 0, 27, 20, 0, 0, 0),
    'end': new Date(2017, 0, 27, 23, 59, 0, 0),
    'type': 'Engineering',
    desc: 'Building the Colony'
  },
  {
    'title': 'Security Duty',
    'start': new Date(2017, 0, 27, 20, 0, 0, 0),
    'end': new Date(2017, 0, 27, 23, 59, 0, 0),
    'type': 'Security',
    desc: 'Colonizing Mars'
  }, // ************************ NEW DAY ************************
  {
    'title': 'Communication Duty',
    'start': new Date(2017, 0, 28, 0, 0, 0, 0),
    'end': new Date(2017, 0, 28, 4, 0, 0, 0),
    'type': 'Communication',
    desc: 'Communicating with other life forms'
  },
  {
    'title': 'Botanical Duty - 1, 3, 5, 6',
    'start': new Date(2017, 0, 28, 0, 0, 0, 0),
    'end': new Date(2017, 0, 28, 4, 0, 0, 0),
    'type': 'Botanical',
    desc: 'Tending to crops'
  },
  {
    'title': 'Engineering Duty',
    'start': new Date(2017, 0, 28, 0, 0, 0, 0),
    'end': new Date(2017, 0, 28, 4, 0, 0, 0),
    'type': 'Engineering',
    desc: 'Building the Colony'
  },
  {
    'title': 'Security Duty',
    'start': new Date(2017, 0, 28, 0, 0, 0, 0),
    'end': new Date(2017, 0, 28, 4, 0, 0, 0),
    'type': 'Security',
    desc: 'Colonizing Mars'
  },
  {
    'title': 'Communication Duty',
    'start': new Date(2017, 0, 28, 4, 0, 0, 0),
    'end': new Date(2017, 0, 28, 8, 0, 0, 0),
    'type': 'Communication',
    desc: 'Communicating with other life forms'
  },
  {
    'title': 'Botanical Duty - 1, 3, 5, 6',
    'start': new Date(2017, 0, 28, 4, 0, 0, 0),
    'end': new Date(2017, 0, 28, 8, 0, 0, 0),
    'type': 'Botanical',
    desc: 'Tending to crops'
  },
  {
    'title': 'Engineering Duty',
    'start': new Date(2017, 0, 28, 4, 0, 0, 0),
    'end': new Date(2017, 0, 28, 8, 0, 0, 0),
    'type': 'Engineering',
    desc: 'Building the Colony'
  },
  {
    'title': 'Security Duty',
    'start': new Date(2017, 0, 28, 4, 0, 0, 0),
    'end': new Date(2017, 0, 28, 8, 0, 0, 0),
    'type': 'Security',
    desc: 'Colonizing Mars'
  },
  {
    'title': 'Communication Duty',
    'start': new Date(2017, 0, 28, 8, 0, 0, 0),
    'end': new Date(2017, 0, 28, 12, 0, 0, 0),
    'type': 'Communication',
    desc: 'Communicating with other life forms'
  },
  {
    'title': 'Botanical Duty - 1, 3, 5, 6',
    'start': new Date(2017, 0, 28, 8, 0, 0, 0),
    'end': new Date(2017, 0, 28, 12, 0, 0, 0),
    'type': 'Botanical',
    desc: 'Tending to crops'
  },
  {
    'title': 'Engineering Duty',
    'start': new Date(2017, 0, 28, 8, 0, 0, 0),
    'end': new Date(2017, 0, 28, 12, 0, 0, 0),
    'type': 'Engineering',
    desc: 'Building the Colony'
  },
  {
    'title': 'Security Duty',
    'start': new Date(2017, 0, 28, 8, 0, 0, 0),
    'end': new Date(2017, 0, 28, 12, 0, 0, 0),
    'type': 'Security',
    desc: 'Colonizing Mars'
  },
  {
    'title': 'Communication Duty',
    'start': new Date(2017, 0, 28, 12, 0, 0, 0),
    'end': new Date(2017, 0, 28, 16, 0, 0, 0),
    'type': 'Communication',
    desc: 'Communicating with other life forms'
  },
  {
    'title': 'Botanical Duty - 1, 3, 5, 6',
    'start': new Date(2017, 0, 28, 12, 0, 0, 0),
    'end': new Date(2017, 0, 28, 16, 0, 0, 0),
    'type': 'Botanical',
    desc: 'Tending to crops'
  },
  {
    'title': 'Engineering Duty',
    'start': new Date(2017, 0, 28, 12, 0, 0, 0),
    'end': new Date(2017, 0, 28, 16, 0, 0, 0),
    'type': 'Engineering',
    desc: 'Building the Colony'
  },
  {
    'title': 'Security Duty',
    'start': new Date(2017, 0, 28, 12, 0, 0, 0),
    'end': new Date(2017, 0, 28, 16, 0, 0, 0),
    'type': 'Security',
    desc: 'Colonizing Mars'
  },
  {
    'title': 'Communication Duty',
    'start': new Date(2017, 0, 28, 16, 0, 0, 0),
    'end': new Date(2017, 0, 28, 20, 0, 0, 0),
    'type': 'Communication',
    desc: 'Communicating with other life forms'
  },
  {
    'title': 'Botanical Duty - 1, 3, 5, 6',
    'start': new Date(2017, 0, 28, 16, 0, 0, 0),
    'end': new Date(2017, 0, 28, 20, 0, 0, 0),
    'type': 'Botanical',
    desc: 'Tending to crops'
  },
  {
    'title': 'Engineering Duty',
    'start': new Date(2017, 0, 28, 16, 0, 0, 0),
    'end': new Date(2017, 0, 28, 20, 0, 0, 0),
    'type': 'Engineering',
    desc: 'Building the Colony'
  },
  {
    'title': 'Security Duty',
    'start': new Date(2017, 0, 28, 16, 0, 0, 0),
    'end': new Date(2017, 0, 28, 20, 0, 0, 0),
    'type': 'Security',
    desc: 'Colonizing Mars'
  },
  {
    'title': 'Communication Duty',
    'start': new Date(2017, 0, 28, 20, 0, 0, 0),
    'end': new Date(2017, 0, 28, 23, 59, 0, 0),
    'type': 'Communication',
    desc: 'Communicating with other life forms'
  },
  {
    'title': 'Botanical Duty - 1, 3, 5, 6',
    'start': new Date(2017, 0, 28, 20, 0, 0, 0),
    'end': new Date(2017, 0, 28, 23, 59, 0, 0),
    'type': 'Botanical',
    desc: 'Tending to crops'
  },
  {
    'title': 'Engineering Duty',
    'start': new Date(2017, 0, 28, 20, 0, 0, 0),
    'end': new Date(2017, 0, 28, 23, 59, 0, 0),
    'type': 'Engineering',
    desc: 'Building the Colony'
  },
  {
    'title': 'Security Duty',
    'start': new Date(2017, 0, 28, 20, 0, 0, 0),
    'end': new Date(2017, 0, 28, 23, 59, 0, 0),
    'type': 'Security',
    desc: 'Colonizing Mars'
  }
];


module.exports = events;
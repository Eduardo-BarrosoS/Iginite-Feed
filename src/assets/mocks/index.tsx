const posts = [
    {   
        id: 1,
        author: {
            avatarUrl: 'https://github.com/Eduardo-BarrosoS.png',
            name: 'Eduardo Barroso',
            rule: 'Web Developer',
        },
        
        content: [
            {type: 'paragraph', content: 'Fala galeraa 👋',},
            {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu profile. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',},
            {type: 'link', content: 'jane.design/doctorcare', },
        ],
        publishedAt: new Date('2022-06-13 17:43:33'),
    },
    
    {   
      id: 2,
      author: {
          avatarUrl: 'https://github.com/Eduardo-BarrosoS.png',
          name: 'Pedro Carvalho',
          rule: 'Web Disiner',
      },
      
      content: [
          {type: 'paragraph', content: 'Fala galeraa 👋',},
          {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu profile. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',},
          {type: 'link', content: 'jane.design/doctorcare', },
      ],
      publishedAt: new Date('2022-06-12 09:30:33'),
  }

]

export { posts }
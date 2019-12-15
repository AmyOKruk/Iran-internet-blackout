let config = {
  style: 'mapbox://styles/amyokruk/ck426zxzs1abn1cqd1oov8ney',
  accessToken:
    'pk.eyJ1IjoiYW15b2tydWsiLCJhIjoiY2p4bzFsOW1oMDI5ZDNib2F5Z3B5aHF2diJ9.1m_7WhyZA5MeYfVkItdP0g',
  showMarkers: true,
  theme: 'light',
  alignment: 'left',
  // title: 'The Title Text of this Story',
  // subtitle: 'A descriptive and interesting subtitle to draw in the reader',
  // byline: 'By a Digital Storyteller',
  footer: "Source: Data from Monash University's IP-Observatory in Australia.",
  chapters: [
    {
      id: 'slug-style-id-first',
      title: 'Iran before the blackout',
      image: './scale-01.png',
      description:
        "International organizations for internet freedom monitor global connectivity by pinging IP addresses in known locations. The data shows Iran's network strength was throttled around 9:00 p.m. on Nov. 16, 2019.",
      location: {
        center: [39.18422, 28.86054],
        zoom: 3.66,
        pitch: 0.0,
        bearing: 0.0
      },
      onChapterEnter: [
        {
          layer: 'amyokruk-8ctarlk4',
          opacity: 0
        }
      ],
      onChapterExit: [
        // {
        //     layer: 'layer-name',
        //     opacity: 0
        // }
      ]
    },
    {
      id: 'slug-style-id',
      // title: 'A lone holdout',
      // image: './path/to/image/source.png',
      description:
        'One area in Iran resisted the internet jam according to an Australian research lab: Bam, Kerman province. The city of 73,823 surrounds an ancient citidel in the south-eastern part of the country.',
      location: {
        center: [39.18422, 28.86054],
        zoom: 3.66,
        pitch: 0.0,
        bearing: 0.0
      },
      onChapterEnter: [
        {
          layer: 'amyokruk-8ctarlk4',
          opacity: 0
        }
      ],
      onChapterExit: [
        // {
        //     layer: 'layer-name',
        //     opacity: 0
        // }
      ]
    },
    {
      id: 'slug-style-id',
      title: 'A lone holdout',
      // image: './path/to/image/source.png',
      description:
        "While Bam maintained 70% of its normal connectivity level, other cities plummeted to 10%, rendering them effectively offline. About half of Iran's population, 41,511,911, lives within 25 miles of signal samples seen here.",
      location: {
        center: [39.18422, 28.86054],
        zoom: 3.66,
        pitch: 0.0,
        bearing: 0.0
      },
      onChapterEnter: [
        {
          layer: 'amyokruk-8ctarlk4',
          opacity: 0
        }
      ],
      onChapterExit: [
        // {
        //     layer: 'layer-name',
        //     opacity: 0
        // }
      ]
    },
    {
      id: 'other-identifier',
      // title: 'Major earthquake hits Bam',
      // image: './path/to/image/source.png',
      description:
        'Much of Bam was destroyed in 2003 when a 6.6 magnitude earthquake struck the city in the early hours of Dec. 26, killing 26,000 and injuring 30,000 more. Many people were inside their homes asleep, and the city largely consisted of mud brick buildings, many of which did not comply with earthquake regulations.',
      location: {
        center: [58.31382, 29.09572],
        zoom: 11.6,
        pitch: 0.5,
        bearing: 0.0
      },
      onChapterEnter: [
        {
          layer: 'amyokruk-8ctarlk4',
          opacity: 1
        }
      ],
      onChapterExit: []
    }
    // {
    //     id: 'other-identifier',
    //     title: 'Second Title',
    //     // image: './path/to/image/source.png',
    //     description: 'Copy these sections to add to your story.',
    //     location: {
    //         center: [58.31382, 29.09572],
    //         zoom: 11.60,
    //         pitch: 0.50,
    //         bearing: 0.00
    //     },
    //     onChapterEnter: [
    //         {
    //             layer: 'amyokruk-8ctarlk4',
    //             opacity: 1
    //         }
    //     ],
    //     onChapterExit: []
    // }
  ]
}

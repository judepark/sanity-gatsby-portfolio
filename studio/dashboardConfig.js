export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ecfdf0d351f80cccee928ea',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-oxeq11y8',
                  apiId: '095e2ac9-10c8-4ade-8c28-a9462e63e15b'
                },
                {
                  buildHookId: '5ecfdf0d38bc5d3ce98945bf',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-jrs6s368',
                  apiId: '6f0836ba-bdf6-4b49-9f8e-0c849425ce93'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/judepark/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-jrs6s368.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}

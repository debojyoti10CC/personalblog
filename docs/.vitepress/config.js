module.exports = {
  title: 'Debojyoti De Majumder',
  description: 'Personal Portfolio',
  appearance: true,
  themeConfig: {
    search: {
      provider: 'local'
    },
    darkModeSwitchLabel: 'Theme',
    sidebarMenuLabel: 'Menu',
    returnToTopLabel: 'Return to top',
    docFooter: {
      prev: 'Previous',
      next: 'Next'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
      { text: 'Links', link: '/links' },
      { text: 'Resume', link: '/resume' },
      { text: 'Blogs', link: '/blogs' },
      { text: 'Projects', link: '/projects' },
      { text: 'Posts', link: '/posts' },
      { text: 'Certificates', link: '/certificates' },
      { icon: 'github', link: 'https://github.com' },
  { icon: 'linkedin', link: 'https://linkedin.com' },
  { icon: 'youtube', link: 'https://youtube.com' }
    ],
    

    sidebar: {
      '/': getMainSidebar(),
    }
  }
}

function getMainSidebar() {
  return [
    {
      text: 'Introduction',
      children: [
        { text: 'Home Page', link: '/' },
        { text: 'Page 2', link: '/page2' },
        { text: 'Page 3', link: '/page3' },
      ]
    },
    {
      text: 'Blogs',
      children: [
        {
          text: '1st Semester',
          children: [
            { text: 'Blog 1', link: '/blogs/1st-semester/blog1' },
            { text: 'Blog 2', link: '/blogs/1st-semester/blog2' },
          ]
        },
        {
          text: '2nd Semester',
          children: [
            { text: 'Blog 1', link: '/blogs/2nd-semester/blog1' },
            { text: 'Blog 2', link: '/blogs/2nd-semester/blog2' },
          ]
        },
        {
          text: '3rd Semester',
          children: [
            { text: 'Blog 1', link: '/blogs/3rd-semester/blog1' },
            { text: 'Blog 2', link: '/blogs/3rd-semester/blog2' },
          ]
        }
      ]
    }
  ]
}


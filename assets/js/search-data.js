// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Selected publications and abstracts.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-repos",
          title: "Repos",
          description: "Research code, benchmarks, and lightweight project hubs.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repos/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Current curriculum vitae and downloadable PDF.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "projects-cti-bench",
          title: 'CTI-Bench',
          description: "Benchmarking infrastructure for cyber threat intelligence research workflows.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/cti-bench/";
            },},{id: "projects-rlvr-sequence-generalization",
          title: 'RLVR Sequence Generalization',
          description: "Experiments and analysis for sequence generalization under RL with verifiable rewards.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/rlvr-seq-generalization/";
            },},{id: "projects-sphinx",
          title: 'SPHINX',
          description: "A synthetic environment for visual perception and reasoning.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/sphinx/";
            },},{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/maveryn", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/maveryn", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=EjbYMI0AAAAJ", "_blank");
        },
      },{
        id: 'social-stackoverflow',
        title: 'Stackoverflow',
        section: 'Socials',
        handler: () => {
          window.open("https://stackoverflow.com/users/5131287/anathaatma", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];

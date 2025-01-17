module.exports = (options) => {
  return `<!DOCTYPE html>
    <html lang="en">

    <head>
      <meta charset="UTF-8">
      <title>Pragmatic Penguin Knowledge Base</title>
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta name="description" content="A learning and development repository, aimed to share knowledge with other technical professionals. ">
      <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
      <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/docsify@4/themes/vue.css" />

      <link rel="icon" href="./favicon.ico" type="favicon.ico" />

      <!-- Font awesome -->
      <link rel="stylesheet" href="//unpkg.com/@fortawesome/fontawesome-free/css/fontawesome.css" />
      <link rel="stylesheet" href="//unpkg.com/@fortawesome/fontawesome-free/css/brands.css" />
      <link rel="stylesheet" href="//unpkg.com/@fortawesome/fontawesome-free/css/regular.css" />
      <link rel="stylesheet" href="//unpkg.com/@fortawesome/fontawesome-free/css/solid.css" />
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp" rel="stylesheet"/>
      <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/docsify-sidebar-collapse/dist/sidebar-folder.min.css" />
      <link rel="stylesheet" href="./custom.css" />
    </head>

    <body>
      <div id="app"></div>
      <script>
        window.$docsify = {
		name: '{{name}}',
		repo: 'sddevelopment-be/penguin-pragmatic-patterns',
		loadSidebar: true,
		mergeNavbar: true,
		alias: {
                    '/.*/_sidebar.md': '/_sidebar.md',
  		},
		maxLevel: 2,
		subMaxLevel: 3,
		sidebarDisplayLevel: 1,
		coverpage: true,
		homepage: 'HOME.md',
		auto2top: true,
		plantuml: {
			skin: 'classic'
		},
		logo: './logo.png',
		themeColor: 'rgb(2, 144, 232)',

		timeUpdater: {
		       text: "_last updated: {docsify-updated}_",
		       formatUpdated: "{YYYY}/{MM}/{DD}",
		},

		share: {
		        reddit: true,
			linkedin: true,
			twitter: true,
			whatsapp: true,
			telegram: true,
		},
    
		tabs: {
		    persist    : true,      // default
		    sync       : true,      // default
		    theme      : 'classic', // default
		    tabComments: true,      // default
		    tabHeadings: true       // default
  		},
      'flexible-alerts': {
      }
	};
      </script>
      <script src="//unpkg.com/docsify/lib/docsify.min.js"></script>
      <script src="//unpkg.com/docsify-plantuml/dist/docsify-plantuml.min.js"></script>
      <script src="//cdn.jsdelivr.net/npm/docsify/lib/plugins/zoom-image.min.js"></script>

      <!-- plugins -->
      <script src="//unpkg.com/docsify-copy-code@2"></script>
      <script src="//unpkg.com/docsify-material-icons/dist/docsify-material-icons.min.js"></script>
      <script src="//unpkg.com/@rakutentech/docsify-code-inline/dist/index.min.js"></script>
      <script src="//unpkg.com/docsify-accordify/src/index.js"></script>
      <script src="//cdn.jsdelivr.net/npm/docsify-updated@1/src/time-updater.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/docsify-tabs@1"></script>
      <script src="//cdn.jsdelivr.net/npm/docsify-sidebar-collapse/dist/docsify-sidebar-collapse.min.js"></script>
      <script src="//unpkg.com/docsify-fontawesome/dist/docsify-fontawesome.min.js"></script>
      <script src="https://unpkg.com/docsify-plugin-flexible-alerts"></script>
      <script src="//cdn.jsdelivr.net/npm/@sy-records/docsify-footnotes/lib/index.min.js"></script>
</body>

    </html>`;
};

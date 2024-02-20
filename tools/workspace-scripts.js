module.exports = {
  message: 'NativeScript Plugins ~ made with ❤️  Choose a command to start...',
  pageSize: 32,
  scripts: {
    default: 'nps-i',
    nx: {
      script: 'nx',
      description: 'Execute any command with the @nrwl/cli',
    },
    format: {
      script: 'nx format:write',
      description: 'Format source code of the entire workspace (auto-run on precommit hook)',
    },
    '🔧': {
      script: `npx cowsay "NativeScript plugin demos make developers 😊"`,
      description: '_____________  Apps to demo plugins with  _____________',
    },
    // demos
    apps: {
      '...Vanilla...': {
        script: `npx cowsay "Nothing wrong with vanilla 🍦"`,
        description: ` 🔻 Vanilla`,
      },
      demo: {
        clean: {
          script: 'nx run demo:clean',
          description: '⚆  Clean  🧹',
        },
        ios: {
          script: 'nx run demo:ios',
          description: '⚆  Run iOS  ',
        },
        android: {
          script: 'nx run demo:android',
          description: '⚆  Run Android  🤖',
        },
      },
      '...Angular...': {
        script: `npx cowsay "Test all the Angles!"`,
        description: ` 🔻 Angular`,
      },
      'demo-angular': {
        clean: {
          script: 'nx run demo-angular:clean',
          description: '⚆  Clean  🧹',
        },
        ios: {
          script: 'nx run demo-angular:ios',
          description: '⚆  Run iOS  ',
        },
        android: {
          script: 'nx run demo-angular:android',
          description: '⚆  Run Android  🤖',
        },
      },
    },
    '⚙️': {
      script: `npx cowsay "@bizappzone-castle-ui-ns/* packages will keep your ⚙️ cranking"`,
      description: '_____________  @bizappzone-castle-ui-ns/*  _____________',
    },
    // packages
    // build output is always in dist/packages
    '@bizappzone-castle-ui-ns': {
      // @bizappzone-castle-ui-ns/baz-button
      'baz-button': {
        build: {
          script: 'nx run baz-button:build.all',
          description: '@bizappzone-castle-ui-ns/baz-button: Build',
        },
      },
      // @bizappzone-castle-ui-ns/baz-layout
      'baz-layout': {
        build: {
          script: 'nx run baz-layout:build.all',
          description: '@bizappzone-castle-ui-ns/baz-layout: Build',
        },
      },
      // @bizappzone-castle-ui-ns/baz-input
      'baz-input': {
        build: {
          script: 'nx run baz-input:build.all',
          description: '@bizappzone-castle-ui-ns/baz-input: Build',
        },
      },
      // @bizappzone-castle-ui-ns/baz-search
      'baz-search': {
        build: {
          script: 'nx run baz-search:build.all',
          description: '@bizappzone-castle-ui-ns/baz-search: Build',
        },
      },
      // @bizappzone-castle-ui-ns/baz-icon
      'baz-icon': {
        build: {
          script: 'nx run baz-icon:build.all',
          description: '@bizappzone-castle-ui-ns/baz-icon: Build',
        },
      },
      // @bizappzone-castle-ui-ns/baz-header
      'baz-header': {
        build: {
          script: 'nx run baz-header:build.all',
          description: '@bizappzone-castle-ui-ns/baz-header: Build',
        },
      },
      // @bizappzone-castle-ui-ns/baz-splash
      'baz-splash': {
        build: {
          script: 'nx run baz-splash:build.all',
          description: '@bizappzone-castle-ui-ns/baz-splash: Build',
        },
      },
      // @bizappzone-castle-ui-ns/baz-footer
      'baz-footer': {
        build: {
          script: 'nx run baz-footer:build.all',
          description: '@bizappzone-castle-ui-ns/baz-footer: Build',
        },
      },
      // @bizappzone-castle-ui-ns/baz-language
      'baz-language': {
        build: {
          script: 'nx run baz-language:build.all',
          description: '@bizappzone-castle-ui-ns/baz-language: Build',
        },
      },
      // @bizappzone-castle-ui-ns/baz-theme
      'baz-theme': {
        build: {
          script: 'nx run baz-theme:build.all',
          description: '@bizappzone-castle-ui-ns/baz-theme: Build',
        },
      },
      // @bizappzone-castle-ui-ns/baz-body
      'baz-body': {
        build: {
          script: 'nx run baz-body:build.all',
          description: '@bizappzone-castle-ui-ns/baz-body: Build',
        },
      },
      // @bizappzone-castle-ui-ns/baz-text
      'baz-text': {
        build: {
          script: 'nx run baz-text:build.all',
          description: '@bizappzone-castle-ui-ns/baz-text: Build',
        },
      },
      'build-all': {
        script: 'nx run-many --target=build.all --all',
        description: 'Build all packages',
      },
    },
    '⚡': {
      script: `npx cowsay "Focus only on source you care about for efficiency ⚡"`,
      description: '_____________  Focus (VS Code supported)  _____________',
    },
    focus: {
      'baz-button': {
        script: 'nx run baz-button:focus',
        description: 'Focus on @bizappzone-castle-ui-ns/baz-button',
      },
      'baz-layout': {
        script: 'nx run baz-layout:focus',
        description: 'Focus on @bizappzone-castle-ui-ns/baz-layout',
      },
      'baz-input': {
        script: 'nx run baz-input:focus',
        description: 'Focus on @bizappzone-castle-ui-ns/baz-input',
      },
      'baz-search': {
        script: 'nx run baz-search:focus',
        description: 'Focus on @bizappzone-castle-ui-ns/baz-search',
      },
      'baz-icon': {
        script: 'nx run baz-icon:focus',
        description: 'Focus on @bizappzone-castle-ui-ns/baz-icon',
      },
      'baz-header': {
        script: 'nx run baz-header:focus',
        description: 'Focus on @bizappzone-castle-ui-ns/baz-header',
      },
      'baz-splash': {
        script: 'nx run baz-splash:focus',
        description: 'Focus on @bizappzone-castle-ui-ns/baz-splash',
      },
      'baz-footer': {
        script: 'nx run baz-footer:focus',
        description: 'Focus on @bizappzone-castle-ui-ns/baz-footer',
      },
      'baz-language': {
        script: 'nx run baz-language:focus',
        description: 'Focus on @bizappzone-castle-ui-ns/baz-language',
      },
      'baz-theme': {
        script: 'nx run baz-theme:focus',
        description: 'Focus on @bizappzone-castle-ui-ns/baz-theme',
      },
      'baz-body': {
        script: 'nx run baz-body:focus',
        description: 'Focus on @bizappzone-castle-ui-ns/baz-body',
      },
      'baz-text': {
        script: 'nx run baz-text:focus',
        description: 'Focus on @bizappzone-castle-ui-ns/baz-text',
      },
      reset: {
        script: 'nx g @bizappzone-castle-ui-ns/plugin-tools:focus-packages',
        description: 'Reset Focus',
      },
    },
    '.....................': {
      script: `npx cowsay "That's all for now folks ~"`,
      description: '.....................',
    },
  },
};

import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: ['getting-started/overview', 'getting-started/quickstart'],
    },
    {
      type: 'category',
      label: 'Workflow',
      items: ['workflow/cli', 'workflow/github-app', 'workflow/slack'],
    },
  ],
};

export default sidebars;

export type SidebarItem = {
  title: string;
  slug?: string;
  children: Array<{
    title: string;
    slug: string;
    status?: string;
  }>;
};

export const SIDEBAR: Array<SidebarItem> = [
  {
    title: 'ECE SW Labs',
    children: [
      {
        title: 'Lab 0',
        slug: '/docs',
      },
      {
        title: 'Lab 1',
        slug: '/docs/ece-sw-lab-1',
      },
    ],
  },
];

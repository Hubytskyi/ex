import icon from '../assets/images/icon.svg';

export const navInsuranceProducts = {
  title: 'Insurance Products', type: 'default', categories: [
    {
      title: 'Life Insurance', slug: 'life-insurance', icon: icon, items: [
        {title: 'Term Insurance', slug: 'term-insurance'},
        {title: 'Term Insurance', slug: 'term-insurance'},
        {title: 'Term Insurance', slug: 'term-insurance'},
        {title: 'Term Insurance', slug: 'term-insurance'},
        {title: 'Term Insurance', slug: 'term-insurance'},
      ],
    },
    {
      title: 'Life Insurance', slug: 'life-insurance', icon: icon, items: [
        {title: 'Term Insurance', slug: 'term-insurance'},
        {title: 'Term Insurance', slug: 'term-insurance'},
        {title: 'Term Insurance', slug: 'term-insurance'},
        {title: 'Term Insurance', slug: 'term-insurance'},
        {title: 'Term Insurance', slug: 'term-insurance'},
      ],
    },
    {
      title: 'Life Insurance', slug: 'life-insurance', icon: icon, items: [
        {title: 'Term Insurance', slug: 'term-insurance'},
        {title: 'Term Insurance', slug: 'term-insurance'},
        {title: 'Term Insurance', slug: 'term-insurance'},
        {title: 'Term Insurance', slug: 'term-insurance'},
        {title: 'Term Insurance', slug: 'term-insurance'},
      ],
    },
  ],
};

export const navRenewYourPolicy = {
  title: 'Renew Your Policy', type: 'renew-your-policy', categories: [
    {
      title: 'Life Renewal', slug: 'life-renewal', icon: icon,
    },
    {
      title: 'Life Insurance', slug: 'life-insurance', icon: icon,
    },
    {
      title: 'Life Insurance', slug: 'life-insurance', icon: icon,
    },
  ],
};

export const navFileAClaim = {
  title: 'File a claim', slug: '/', type: 'file-a-claim',
};

export const navSupport = {
  title: 'Support',
  type: 'support',
  categories: [
    {title: 'Policies', subtitle: 'Sign in to view all your policies', icon: icon},
    {title: 'Policies', subtitle: 'Sign in to view all your policies', icon: icon},
    {title: 'Policies', subtitle: 'Sign in to view all your policies', icon: icon},
    {
      contacts: {
        categories: [
          {title: 'Connect on Whatsapp', url: '/', icon: icon},
          {title: 'Connect on Whatsapp', url: '/', icon: icon},
        ],
        phone: {
          title: 'Helpline: +91-124-6656507 10 AM to 7 PM (IST)', url: '+91-124-6656507', icon: icon,
        },
        viewMore: {
          title: 'View more', url: '/', icon: icon,
        },
      },
    },
  ],
};

export const defaultMenu = [
  navInsuranceProducts,
];

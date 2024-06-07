import React from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import commerce from '../../../../public/images/Commerce.png';
import home from '../../../../public/images/home.png';
import events from '../../../../public/images/events.png';
import courses from '../../../../public/images/Courses.png';
import livestream from '../../../../public/images/Livestream.png';
import insights from '../../../../public/images/insights.png';
import user from '../../../../public/images/User.png';
import planBilling from '../../../../public/images/PlanBilling.png';
import podcasts from '../../../../public/images/podcasts.png';
import posts from '../../../../public/images/posts.png';
import returnBar from '../../../../public/images/return.png';
import category from '../../../../public/images/Category.png';

const navigation = [
  { name: 'Home', href: '#', icon: home.src, current: false },
  {
    name: 'Insights',
    icon: insights.src,
    current: false,
    children: [
      { name: 'Engineering', href: '#', current: false },
      { name: 'Human Resources', href: '#', current: false },
    ],
  },
  {
    name: 'Posts',
    icon: posts.src,
    current: false,
    children: [
      { name: 'GraphQL API', href: '#', current: false },
      { name: 'iOS App', href: '#', current: false },
    ],
  },
  { name: 'Category', href: '#', icon: category.src, current: false },
  {
    name: 'Podcasts',
    icon: podcasts.src,
    current: false,
    children: [
      { name: 'GraphQL API', href: '#', current: false },
      { name: 'iOS App', href: '#', current: false },
    ],
  },
  {
    name: 'Commerce',
    icon: commerce.src,
    current: false,
    children: [
      { name: 'Products', href: '#', current: true },
      { name: 'Orders', href: '#', current: false },
      { name: 'Coupon', href: '#', current: false },
    ],
  },
  {
    name: 'Livestream',
    icon: livestream.src,
    current: false,
    children: [
      { name: 'GraphQL API', href: '#', current: false },
      { name: 'iOS App', href: '#', current: false },
    ],
  },
  {
    name: 'Events',
    icon: events.src,
    current: false,
    children: [
      { name: 'GraphQL API', href: '#', current: false },
      { name: 'iOS App', href: '#', current: false },
    ],
  },
  {
    name: 'Courses',
    icon: courses.src,
    current: false,
    children: [
      { name: 'GraphQL API', href: '#', current: false },
      { name: 'iOS App', href: '#', current: false },
    ],
  },
  {
    name: 'Users',
    icon: user.src,
    current: false,
    children: [
      { name: 'GraphQL API', href: '#', current: false },
      { name: 'iOS App', href: '#', current: false },
    ],
  },
  {
    name: 'Plan and billing',
    icon: planBilling.src,
    current: false,
    children: [
      { name: 'GraphQL API', href: '#', current: false },
      { name: 'iOS App', href: '#', current: false },
    ],
  },
  {
    name: 'Return',
    icon: returnBar.src,
    current: false,
    children: [
      { name: 'GraphQL API', href: '#', current: false },
      { name: 'iOS App', href: '#', current: false },
    ],
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Sidebar() {
  return (
    <div className="w-64 flex flex-col overflow-y-auto border-r border-gray-700 bg-[#2A2A2E] px-6 min-h-screen">
      <div className="flex h-8 shrink-0 items-center"></div>
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  {!item.children ? (
                    <a
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-primary text-white' : 'hover:bg-[#62447D]',
                        'group flex items-center gap-x-3 p-2 text-sm leading-6 font-semibold text-white'
                      )}
                    >
                      <img 
                        src={item.icon} 
                        alt="" 
                        className="h-4 w-4 shrink-0 dark:invert" // Apply 'dark:invert' to invert the colors in dark mode
                        aria-hidden="true" 
                      />
                      {item.name}
                    </a>
                  ) : (
                    <Disclosure as="div">
                      {({ open }) => (
                        <>
                          <DisclosureButton
                            className={classNames(
                              item.current ? 'bg-primary text-white' : 'hover:bg-[#62447D]',
                              'flex items-center w-full text-left p-2 gap-x-3 text-sm leading-6 font-semibold text-white'
                            )}
                          >
                            <img 
                              src={item.icon} 
                              alt="" 
                              className="h-4 w-4 shrink-0 dark:invert" // Apply 'dark:invert' to invert the colors in dark mode
                              aria-hidden="true" 
                            />
                            {item.name}
                            <ChevronRightIcon
                              className={classNames(
                                open ? 'rotate-90 text-gray-500' : 'text-gray-400',
                                'ml-auto h-5 w-5 shrink-0'
                              )}
                              aria-hidden="true"
                            />
                          </DisclosureButton>
                          <DisclosurePanel as="ul" className="mt-1 px-2">
                            {item.children.map((subItem) => (
                              <li key={subItem.name}>
                                <DisclosureButton
                                  as="a"
                                  href={subItem.href}
                                  className={classNames(
                                    subItem.current ? 'bg-primary text-white' : 'hover:bg-[#62447D]',
                                    'block py-2 pr-2 pl-9 text-sm leading-6 text-white'
                                  )}
                                >
                                  {subItem.name}
                                </DisclosureButton>
                              </li>
                            ))}
                          </DisclosurePanel>
                        </>
                      )}
                    </Disclosure>
                  )}
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}

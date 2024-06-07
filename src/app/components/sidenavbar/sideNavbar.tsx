"use client";
import React, { useEffect, useState } from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation'
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

interface NavigationItem {
  name: string;
  href?: string;
  icon?: string;
  children?: NavigationItem[];
}

const initialNavigation: NavigationItem[] = [
  { name: 'Home', href: '/', icon: home.src },
  {
    name: 'Insights',
    icon: insights.src,
    children: [
      { name: 'Engineering', href: '/insights/engineering' },
      { name: 'Human Resources', href: '/insights/hr' },
    ],
  },
  {
    name: 'Posts',
    icon: posts.src,
    children: [
      { name: 'GraphQL API', href: '/posts/graphql' },
      { name: 'iOS App', href: '/posts/ios' },
    ],
  },
  { name: 'Category', href: '/category', icon: category.src },
  {
    name: 'Podcasts',
    icon: podcasts.src,
    children: [
      { name: 'GraphQL API', href: '/podcasts/graphql' },
      { name: 'iOS App', href: '/podcasts/ios' },
    ],
  },
  {
    name: 'Commerce',
    icon: commerce.src,
    children: [
      { name: 'Products', href: '/dashboard/commerce/products' },
      { name: 'Orders', href: '/dashboard/commerce/orders' },
      { name: 'Coupon', href: '/commerce/coupon' },
    ],
  },
  {
    name: 'Livestream',
    icon: livestream.src,
    children: [
      { name: 'GraphQL API', href: '/livestream/graphql' },
      { name: 'iOS App', href: '/livestream/ios' },
    ],
  },
  {
    name: 'Events',
    icon: events.src,
    children: [
      { name: 'GraphQL API', href: '/events/graphql' },
      { name: 'iOS App', href: '/events/ios' },
    ],
  },
  {
    name: 'Courses',
    icon: courses.src,
    children: [
      { name: 'GraphQL API', href: '/courses/graphql' },
      { name: 'iOS App', href: '/courses/ios' },
    ],
  },
  {
    name: 'Users',
    icon: user.src,
    children: [
      { name: 'GraphQL API', href: '/users/graphql' },
      { name: 'iOS App', href: '/users/ios' },
    ],
  },
  {
    name: 'Plan and billing',
    icon: planBilling.src,
    children: [
      { name: 'GraphQL API', href: '/plan-billing/graphql' },
      { name: 'iOS App', href: '/plan-billing/ios' },
    ],
  },
  {
    name: 'Return',
    icon: returnBar.src,
    children: [
      { name: 'GraphQL API', href: '/return/graphql' },
      { name: 'iOS App', href: '/return/ios' },
    ],
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Sidebar() {
  const [currentItem, setCurrentItem] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    setCurrentItem(pathname);
  }, [pathname]);

  const isActive = (href: string) => currentItem === href;

  const isParentActive = (children: NavigationItem[] = []) =>
    children.some((child) => isActive(child.href ?? ''));

  return (
    <div className="w-64 flex flex-col overflow-y-auto border-r border-gray-700 bg-[#2A2A2E] px-6 min-h-screen">
      <div className="flex h-8 shrink-0 items-center"></div>
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {initialNavigation.map((item) => (
                <li key={item.name}>
                  {!item.children ? (
                    <a
                      href={item.href}
                      className={classNames(
                        isActive(item.href ?? '') ? 'bg-primary text-white' : 'hover:bg-[#62447D]',
                        'group flex items-center gap-x-3 p-2 text-sm leading-6 font-semibold text-white'
                      )}
                    >
                      {item.icon && (
                        <img
                          src={item.icon}
                          alt=""
                          className="h-4 w-4 shrink-0 dark:invert"
                          aria-hidden="true"
                        />
                      )}
                      {item.name}
                    </a>
                  ) : (
                    <Disclosure as="div" defaultOpen={isParentActive(item.children)}>
                      {({ open }) => (
                        <>
                          <DisclosureButton
                            className={classNames(
                              isParentActive(item.children) ? 'bg-primary text-white' : 'hover:bg-[#62447D]',
                              'flex items-center w-full text-left p-2 gap-x-3 text-sm leading-6 font-semibold text-white'
                            )}
                          >
                            {item.icon && (
                              <img
                                src={item.icon}
                                alt=""
                                className="h-4 w-4 shrink-0 dark:invert"
                                aria-hidden="true"
                              />
                            )}
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
                            {(item.children ?? []).map((subItem) => (
                              <li key={subItem.name}>
                                <a
                                  href={subItem.href}
                                  className={classNames(
                                    isActive(subItem.href ?? '') ? 'bg-[#62447D] text-white' : 'hover:bg-[#62447D]',
                                    'block py-2 pr-2 pl-9 text-sm leading-6 text-white'
                                  )}
                                >
                                  {subItem.name}
                                </a>
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

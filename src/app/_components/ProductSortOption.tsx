'use client';

import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';

import { useSearchParams } from 'next/navigation';
import { Flex } from '@radix-ui/themes';
import { productColumnOptions } from '@/app/_utils/constants';
import { FontSizeIcon } from '@radix-ui/react-icons';

import useThemeStore from '@/app/_store/theme';

const ProductSortOption = () => {
    const searchParams = useSearchParams();
    const themeStore = useThemeStore();

    const isDarkMode = themeStore.theme === 'dark';

    return ( 
        <Flex 
            gap='3'
            align='center'
            justify='center'
            className={classNames({
                'rounded-sm py-1 px-3 w-max': true,
                'light-bg': !isDarkMode,
                'dark-bg': isDarkMode,
            })} 
        >
            <FontSizeIcon width='15' height='15' />
            
            {productColumnOptions.map((option) => (
                <Link className={classNames({
                    'py-1 px-3 text-center rounded-sm font-bold text-xs uppercase': true,
                    'bg-slate-50 text-black': isDarkMode && searchParams.get('sortOption') === option.value,
                    'bg-slate-800 text-white': !isDarkMode && searchParams.get('sortOption') === option.value
                })} key={option.value} href={`/?sortOption=${option.value}`}>
                    {option.label}
                </Link>
            ))}
        </Flex>
     );
}
 
export default ProductSortOption;
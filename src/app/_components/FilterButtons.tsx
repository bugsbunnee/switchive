'use client';

import { Flex, IconButton } from "@radix-ui/themes";
import { productCategoryOptions } from "../_utils/constants";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

import ProductOptionSelect from "@/app/_components/ProductOptionSelect";
import ProductSortOption from "@/app/_components/ProductSortOption";

import useThemeStore from "@/app/_store/theme"


const FilterButtons = () => {
    const { theme, toggleTheme } = useThemeStore();

    return (
        <Flex direction={{ initial: 'column', md: 'row' }} align='center' justify='between' className="mb-6" gap='3'>
            <Flex gap='3' >
                <ProductOptionSelect
                    options={productCategoryOptions} 
                    selectKey='category' 
                    placeholder='Filter by category...'
                />
            
                <IconButton color='gray' variant='soft' onClick={toggleTheme}>
                    {theme === 'light' ? <SunIcon width='18' height='18' /> : <MoonIcon width='18' height='18' />}
                </IconButton>
            </Flex>

            <ProductSortOption />
        </Flex>
    )
};

export default FilterButtons;
'use client';

import React from 'react';
import Image from 'next/image';

import _ from 'lodash';

import { motion } from 'framer-motion';
import { Badge, Box, Card, Flex, Grid, Heading, Inset, Text } from '@radix-ui/themes';
import { Product } from "@/app/_utils/models";
import { paginate } from '@/app/_utils/lib';

import Pagination from '@/app/_components/Pagination';

interface Props {
    products: Product[];
    pageSize: number;
    currentPage: number;
    category: string;
    sortOption: keyof Product;
}

const Products: React.FC<Props> = ({ category, currentPage, pageSize, products, sortOption }) => {
    const sortedProducts = _.orderBy(products, [sortOption], ['asc']);
    const filteredProducts = category && category !== 'all' ? sortedProducts.filter((product) => product.tags.includes(category.toLowerCase())) : sortedProducts
    const paginatedProducts = paginate(filteredProducts, currentPage, pageSize);

    return (
        <>
            <Grid columns={{ initial: '1', sm: '1' , md: '2', lg: '4'}} gap='6' my='9'>
                {paginatedProducts.map((product) => (
                    <Card key={product.id} size='2'>
                            <motion.div 
                                key={product.id} 
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Inset clip="padding-box" side="top" pb="current">
                                    <Image src={product.thumbnail} alt={product.title} width={300} height={200} className='w-full h-64 object-cover' />
                                </Inset>
                            </motion.div>

                            <Box className='p-3'>
                                <Flex align='center' justify='between'>
                                    <Heading as='h2' size='3'>{product.title}</Heading>

                                    <Badge radius='full' color='green' size='1'>₦{product.price}</Badge>
                                </Flex>
                                
                                <Box my='5' height='100%'>
                                    <Text size='1'>{product.description}</Text>
                                </Box>

                                <Flex justify='between' align='center'>
                                    <Flex gap='3'>
                                        {product.tags.map((tag) => (
                                            <Badge key={tag} color="orange">{tag}</Badge>
                                        ))}
                                    </Flex>

                                    <Badge color='red'>{product.discountPercentage}% Off</Badge>
                                </Flex>
                            </Box>
                    </Card>
                ))}
            </Grid>

            <Flex justify='end' align='center'>
                <Pagination
                    pageSize={pageSize}
                    currentPage={currentPage}
                    itemCount={products.length}
                />
            </Flex>
        </>
    )
};

export default Products;
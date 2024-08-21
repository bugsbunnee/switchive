import React from 'react';
import _ from 'lodash';

import { Box, Card, Flex, Grid, Heading, Inset, Skeleton, Text } from '@radix-ui/themes';

const ProductSkeleton = () => {
    return (
        <Grid columns={{ initial: '2', sm: '1' , lg: '4'}} gap='5' my='9'>
            {_.range(1, 17).map((key) => (
                <Card key={key} size='2'>
                    <Inset clip="padding-box" side="top" pb="current">
                        <Skeleton height='15rem' />
                    </Inset>

                    <Box className='p-3'>
                        <Flex align='center' justify='between'>
                            <Heading as='h2' size='3'>
                                <Skeleton width='10rem' />
                            </Heading>

                            <Skeleton width='5rem' />
                        </Flex>
                        
                        <Box my='5' height='100%'>
                            <Text size='1'>
                                <Skeleton>
                                    This is a really really really long description spaning across several lines
                                </Skeleton>
                            </Text>
                        </Box>

                        <Flex justify='between' align='center'>
                            <Flex gap='2'>
                                {[1, 2].map((tag) => (
                                    <Skeleton key={tag} width='5rem' />
                                ))}
                            </Flex>

                            <Skeleton width='5rem' />
                        </Flex>
                    </Box>
                </Card>
            ))}
        </Grid>
    )
};

export default ProductSkeleton;
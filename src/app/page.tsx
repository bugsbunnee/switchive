import _ from 'lodash';
import dynamic from "next/dynamic";

import { Container, Flex } from "@radix-ui/themes";
import { Product } from "@/app/_utils/models";
import { productColumnNames } from '@/app/_utils/constants';

import ProductSkeleton from '@/app/_components/ProductSkeleton';
import FilterButtons from './_components/FilterButtons';

const Products = dynamic(() => import('@/app/_components/Products'),
  { ssr: false, loading: () => <ProductSkeleton /> }
);

interface Props {
  searchParams: { 
    page: string; 
    sortOption: keyof Product;
    category: string;
  }
}

const ProductsPage = async ({ searchParams }: Props) => {
  const response = await fetch(process.env.NEXT_AUTH_API_URL as string);
  const result: { products: Product[] }  = await response.json();

  const page = parseInt(searchParams.page) || 1;
  const orderBy = productColumnNames.includes(searchParams.sortOption) ? searchParams.sortOption : 'title';

  const pageSize = 16;

  return (
      <>
        <Container maxWidth='80%' p='6'>
            <FilterButtons />
            
            <Products
              category={searchParams.category}
              sortOption={orderBy}
              products={result.products} 
              currentPage={page}
              pageSize={pageSize} 
            />
        </Container>
      </>
  );
};

export default ProductsPage;


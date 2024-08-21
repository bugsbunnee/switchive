'use client';

import React from 'react';

import { Select } from '@radix-ui/themes';
import { useRouter, useSearchParams } from 'next/navigation';
import { Option } from '@/app/_utils/models';

interface Props {
    options: Option[];
    selectKey: string;
    placeholder: string;
}

const ProductOptionSelect: React.FC<Props> = ({ options, selectKey, placeholder }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  return (
    <Select.Root
      size='2'
      defaultValue={searchParams.get(selectKey) || ''}
      onValueChange={(value) => {
        const params = new URLSearchParams();
        if (value) params.append(selectKey, value);
        if (searchParams.get('sortOption'))
          params.append('sortOption', searchParams.get('sortOption')!);

        const query = params.size ? '?' + params.toString() : '';
        router.push('/' + query);
      }}
    >
      <Select.Trigger placeholder={placeholder} variant='soft' color='gray' />
      <Select.Content>
        {options.map((option) => (
          <Select.Item key={option.label} value={option.value}>
            {option.label}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
};

export default ProductOptionSelect;

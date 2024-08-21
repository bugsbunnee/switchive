export const productColumnOptions = [
    {
        label: 'Title',
        value: 'title',
    },
    {
        label: 'Discount Percentage',
        value: 'discountPercentage',
    },
    {
        label: 'Description',
        value: 'description',
    },
    {
        label: 'Price',
        value: 'price',
    },  
];

export const productCategoryOptions = [
    {
        label: 'All',
        value: 'all'
    },
    {
        label: 'Furniture',
        value: 'furniture',
    },
    {
        label: 'Meat',
        value: 'meat',
    },
    {
        label: 'Vegetables',
        value: 'vegetables',
    },
    {
        label: 'Fragrances',
        value: 'fragrances',
    },
    {
        label: 'Pet Supplies',
        value: 'pet supplies',
    },
];

export const productColumnNames = productColumnOptions.map((option) => option.value);
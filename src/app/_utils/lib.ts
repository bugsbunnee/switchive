import dayjs from "dayjs";

export const setDefaultAppearance = () => {
    const currentHour = dayjs().hour();
    const currentTheme = (currentHour < 8 || currentHour > 17) ? 'dark' : 'light';

    return currentTheme;
};

export const paginate = <T>(items: T[], currentPage: number, totalPages: number) => {
	const startIndex: number = (currentPage - 1) * totalPages;
	return items.slice(startIndex).filter((_, index) => index < totalPages);
};
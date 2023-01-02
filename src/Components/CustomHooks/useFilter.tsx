const useFilter = (data: Array<any>, key: string) => {
    console.log(key,data)

    const filterItems=data.filter((items:any)=>console.log(items.name));
    console.log(filterItems);

    return filterItems;
};

export default useFilter;
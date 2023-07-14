import './MakeSkeletonItem'

const createItemListSkeleton = (x) => {
    let template = '';
    for (let i = 0; i < x; i++) {
        template += `<skeleton-el></skeleton-el>`
    }
    return template;
}

export default createItemListSkeleton;
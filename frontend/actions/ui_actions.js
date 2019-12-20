export const OPEN_SIDE_BAR = 'OPEN_SIDE_BAR';
export const CLOSE_SIDE_BAR = 'CLOSE_SIDE_BAR';
export const OPEN_DROP_DOWN = 'OPEN_DROP_DOWN'
export const CLOSE_DROP_DOWN = 'CLOSE_DROP_DOWN'


export const openSideBar = () =>({
    type: OPEN_SIDE_BAR
})

export const closeSideBar = () =>({
    type: CLOSE_SIDE_BAR
})

export const openDropDown = () =>({
    type: OPEN_DROP_DOWN
})

export const closeDropDown = () =>({
    type: CLOSE_DROP_DOWN
})
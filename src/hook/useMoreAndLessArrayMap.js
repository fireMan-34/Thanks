import {useCallback, useState } from "react"

export default function useMoreAndLessArrayMap(listenArray, loadingCount) {
    if (!Array.isArray(listenArray) && typeof loadingCount !== "number") {
        throw new Error(`
        无错误处理
        `);
    }
    const [pageCount, setPageCount] = useState(1);
    const lessPage = useCallback(() => {
        if (pageCount >= 1) {
            setPageCount(v => v - 1);
        }
    },[pageCount])
    const morePage = useCallback(() => {
        const num=listenArray.length%loadingCount===0?1:0;
        const pageMaxCount=Math.floor(listenArray.length/loadingCount)-num;
        if (pageCount <=pageMaxCount ) {
            setPageCount(v => v + 1);
        }
    },[listenArray,pageCount,loadingCount])
    return {
        lessPage,
        morePage,
        data: listenArray.slice(0, loadingCount * pageCount) || listenArray,
    }
}
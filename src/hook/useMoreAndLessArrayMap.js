import {useState } from "react"

export default function useMoreAndLessArrayMap(ListenArray, loadingCount) {
    if (!Array.isArray(ListenArray) && typeof loadingCount !== "number") {
        throw new Error(`
        无错误处理
        `);
    }
    const [pageCount, setPageCount] = useState(1);
    const lessPage = () => {
        if (pageCount >= 1) {
            setPageCount(v => v - 1);
        }
    }
    const morePage = () => {
        if (pageCount < Math.floor(ListenArray.length / pageCount) + 1) {
            console.log(pageCount);
            setPageCount(v => v + 1);
        }
    }
    return {
        lessPage,
        morePage,
        data: ListenArray.slice(0, loadingCount * pageCount) || ListenArray,
    }
}
'use client'

import { useSearchParams } from "next/navigation"

export default function SortProducts() {
    const searchParams = useSearchParams()

    function updateSorting(sortOrder: string) {
        const params = new URLSearchParams(searchParams.toString())
        params.set('sort', sortOrder)
        window.history.pushState(null, '', `?${params.toString()}`)
    }
    return (
        <div className="flex space-x-4">
            <button
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
                onClick={() => updateSorting('asc')}>Sort Ascending
            </button>
            <button
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-blue-700"
                onClick={() => updateSorting('desc')}>Sort Descending
            </button>
        </div>
    )
}
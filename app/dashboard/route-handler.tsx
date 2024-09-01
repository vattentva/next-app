export default async function Sample() {
    // data fetch from route handler by /api/sample?user=admin
    async function getData() {
        const host = process.env.APP_BASE_URL || ''
        const path = '/api/sample?user=admin'
        const response = await fetch(host + path)
        return await response.json()
    }

    // display data from route handler
    const data = await getData()
    console.log(data);

    // const renderNode = (obj: Object) => {
    //     return Object.entries(obj).map(([key, value]) => {
    //         if (typeof value === 'object') {
    //             return (
    //                 <div className="flex flex-col" key={key}>
    //                     <code>[{key}]</code>
    //                     {renderNode(value)}
    //                 </div>
    //             )
    //         } else {
    //             return <code key={key}>{key}: {value}</code>
    //         }
    //     })
    // }

    return  (
        <div className="flex flex-col">
            <p>{JSON.stringify(data)}</p>
            {/* {renderNode(data)} */}
            TEST
        </div>
    )
}

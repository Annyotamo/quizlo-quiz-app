export default function Type({ paramsHandler }) {
    return (
        <div className="flex-1">
            <p className="text-2xl font-semibold text-blue-800 mb-4">Choose your type</p>
            <div className="flex flex-col space-y-2">
                <div className="flex items-center">
                    <input type="radio" name="type" value="multiple" onChange={paramsHandler} className="mr-2" />
                    <label className="text-lg text-blue-700">Multiple Choice</label>
                </div>
                <div className="flex items-center">
                    <input type="radio" name="type" value="boolean" onChange={paramsHandler} className="mr-2" />
                    <label className="text-lg text-blue-700">True / False</label>
                </div>
                <div className="flex items-center">
                    <input type="radio" name="type" value="" onChange={paramsHandler} className="mr-2" />
                    <label className="text-lg text-blue-700">Any</label>
                </div>
            </div>
        </div>
    )
}
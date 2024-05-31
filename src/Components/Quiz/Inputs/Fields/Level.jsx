export default function Level({ paramsHandler }) {
    return (
        <div className="flex-1">
            <p className="text-2xl font-semibold text-blue-800 mb-4">Choose your level</p>
            <div className="flex flex-col space-y-2">
                <div className="flex items-center">
                    <input type="radio" value="easy" name="level" onChange={paramsHandler} className="mr-2" />
                    <label className="text-lg text-blue-700">Easy</label>
                </div>
                <div className="flex items-center">
                    <input type="radio" value="medium" name="level" onChange={paramsHandler} className="mr-2" />
                    <label className="text-lg text-blue-700">Medium</label>
                </div>
                <div className="flex items-center">
                    <input type="radio" value="hard" name="level" onChange={paramsHandler} className="mr-2" />
                    <label className="text-lg text-blue-700">Hard</label>
                </div>
                <div className="flex items-center">
                    <input type="radio" value="" name="level" onChange={paramsHandler} className="mr-2" />
                    <label className="text-lg text-blue-700">Any</label>
                </div>
            </div>
        </div>
    )
}
import { Appbar } from "./Appbar"

export const BlogSkeleton = () => {
    return <>
        <Appbar />
        <div className="animate-pulse flex justify-center mt-10">
            <div className=" lg:grid lg:grid-cols-12 px-5 w-full pt-200 max-w-screen-xl">
                {/* <div className="mx-10 space-y-4 my-5 w-40">
                </div> */}
                <div className="col-span-8 mx-10 space-y-6">
                    <div className="h-2 bg-slate-400 rounded w-40">
                    </div>
                    <div className="h-2 bg-slate-400 rounded">
                    </div>
                    <div className="h-2 bg-slate-400 rounded">
                    </div>
                    <div className="h-2 bg-slate-400 rounded">
                    </div>
                    <div className="h-2 bg-slate-400 rounded">
                    </div>
                    <div className="h-2 bg-slate-400 rounded">
                    </div>
                    <div className="h-2 bg-slate-400 rounded">
                    </div>
                    <div className="h-2 bg-slate-400 rounded">
                    </div>
                    <div className="h-2 bg-slate-400 rounded">
                    </div>
                    <div className="h-2 bg-slate-400 rounded">
                    </div>
                    <div className="h-2 bg-slate-400 rounded">
                    </div>
                    <div className="h-2 bg-slate-400 rounded">
                    </div>
                    <div className="h-2 bg-slate-400 rounded">
                    </div>
                    <div className="h-2 bg-slate-400 rounded">
                    </div>
                    <div className="h-2 bg-slate-400 rounded">
                    </div>
                    <div className="h-2 bg-slate-400 rounded">
                    </div>
                    <div className="h-2 bg-slate-400 rounded">
                    </div>
                </div>
                <div className="col-span-4 m-10">
                    <div className="h-2 bg-slate-400 rounded w-20">
                    </div>
                    <div className="flex mt-5">
                        <div className="flex flex-col justify-center h-10 w-10 bg-slate-400 rounded-full">

                        </div>
                        <div className="pl-4 space-y-4 w-full">
                            <div className="h-2 bg-slate-400 rounded">
                            </div>
                            <div className="pt-2 h-2 bg-slate-400 rounded">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
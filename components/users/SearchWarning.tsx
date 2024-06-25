import { CircleX, LoaderIcon, SearchXIcon } from "lucide-react";

const SearchWarning = ({ warning }: { warning: string }) => {
  // Similar warning style format for various warnings

  return (
    <div className="bg-gray-200 shadow-lg rounded-lg m-auto w-full h-[45vh] px-8 lg:px-2 lg:h-[30vh]">
      {warning == "not-found" ? (
        <div className="flex justify-center items-center h-full flex-col gap-4">
          <SearchXIcon size={48} />
          <p className="text-xl font-semibold text-center">
            Looks like no user matches the search term. Try searching something
            else.
          </p>
        </div>
      ) : warning == "loading" ? (
        <div className="flex justify-center items-center h-full flex-col gap-4">
          <LoaderIcon size={48} color="lightblue" />
          <p className="text-xl font-semibold text-center">
            Searching Users...
          </p>
        </div>
      ) : (
        <div className="flex justify-center items-center h-full flex-col gap-4">
          <CircleX size={48} color="red" />
          <p className="text-xl font-semibold text-center">
            Something went wrong!
          </p>
        </div>
      )}
    </div>
  );
};

export default SearchWarning;

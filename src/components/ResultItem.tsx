type ResultItemProps = {
  title: string;
  description: string;
  url: string;
  image_url: string;
  published_at: string;
  source: string;
  categories: string[];
}

export default function ResultItem({ title, description, url, image_url, published_at, source, categories }: ResultItemProps) {
  return (
    <>
      <div className=" bg-white pt-5 px-5 shadow-lg rounded-lg">
        <div className="flex flex-row justify-between">
          <div className="basis-3/4">
            <a className="font-bold underline text-blue-700" href={url}>{title}</a>
            <p className="py-3">{description}</p>
            <div className="flex space-x-4">
              <p className="text-gray-500 font-semibold">
                {new Date(published_at).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}</p>
              <p className="text-gray-500 font-semibold">{source}</p>
              <p className="text-gray-500 font-semibold">{categories.join(', ')}</p>
            </div>
          </div>
          <img className="w-32 h-32 rounded-md" src={image_url} alt={title} />
        </div>
      </div>
    </>
  )
}
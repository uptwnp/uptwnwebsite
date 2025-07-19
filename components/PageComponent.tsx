interface Page {
  title: string;
  content: string;
  lastUpdated: string;
}

interface PageComponentProps {
  page: Page;
}

const PageComponent = ({ page }: PageComponentProps) => {
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {page.title}
          </h1>
          <p className="text-gray-600">Last updated: {page.lastUpdated}</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <div
            className="prose prose-lg prose-blue max-w-none"
            dangerouslySetInnerHTML={{ __html: page.content }}
          />
        </div>
      </div>
    </div>
  );
};

export default PageComponent;

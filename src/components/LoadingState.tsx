interface LoadingStateProps {
  title: string;
  message?: string;
}

export default function LoadingState({
  title,
  message = "Loading...",
}: LoadingStateProps) {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">{title}</h1>
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mr-3"></div>
            <p className="text-lg text-gray-600">{message}</p>
          </div>
        </div>
      </div>
    </main>
  );
}

import { mockData, AnswerCard as AnswerCardType } from '../data/mockData';

interface AnswerCardProps {
  query: string;
}

export function AnswerCard({ query }: AnswerCardProps) {
  const getAnswerCard = (query: string): AnswerCardType => {
    const lowerQuery = query.toLowerCase();
    
    if (lowerQuery.includes('esg')) {
      return mockData.answerCards.esg;
    } else if (lowerQuery.includes('surveillance')) {
      return mockData.answerCards.surveillance;
    } else if (lowerQuery.includes('board')) {
      return mockData.answerCards.boardvantage;
    }
    
    return mockData.answerCards.default;
  };

  const answerCard = getAnswerCard(query);

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mb-8">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="w-10 h-10 bg-[#0066CC] rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {answerCard.title}
          </h3>
          <p className="text-gray-700 leading-relaxed">
            {answerCard.content}
          </p>
        </div>
      </div>
    </div>
  );
}
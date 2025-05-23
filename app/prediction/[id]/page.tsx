

// import { useParams, useRouter } from 'next/navigation';
// import { FeedHeader } from '@/components/feed/feed-header';
// import { PredictionCard } from '@/components/feed/prediction-card';
// import { CommentSection } from '@/components/feed/comment-section';
// import { Button } from '@/components/ui/button';
// import { getPredictionById, getUserById } from '@/lib/data';
// import { ArrowLeft } from 'lucide-react';

// export default function PredictionDetailPage() {
//   const params = useParams<{ id: string }>();
//   const router = useRouter();
//   const prediction = getPredictionById(params.id);
  
//   // Mock the current user for demo purposes
//   const currentUser = getUserById('3') || {
//     id: '3',
//     name: 'Demo User',
//     email: 'demo@example.com',
//     createdAt: new Date(),
//   };

//   // Mock comments for demo purposes
//   const comments = [
//     {
//       id: '1',
//       content: 'I think you might be right. The current trends are pointing in this direction.',
//       createdAt: new Date('2024-04-01'),
//       author: getUserById('4')!,
//     },
//     {
//       id: '2',
//       content: 'This is a bold prediction. I respect it, but I disagree. Here\'s why...',
//       createdAt: new Date('2024-04-02'),
//       author: getUserById('5')!,
//     },
//   ];

//   if (!prediction) {
//     return (
//       <div className="min-h-screen bg-gray-50 dark:bg-background">
//         <FeedHeader />
//         <main className="container mx-auto px-4 py-10">
//           <div className="max-w-2xl mx-auto text-center">
//             <h1 className="text-2xl font-bold mb-4">Prediction not found</h1>
//             <Button onClick={() => router.push('/feed')}>Back to Feed</Button>
//           </div>
//         </main>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 dark:bg-background ">
//       <FeedHeader />
      
//       <main className="container mx-auto px-4 py-6 ">
//         <div className="max-w-2xl mx-auto">
//           <Button
//             variant="ghost"
//             className="mb-4 pl-0 flex items-center gap-2"
//             onClick={() => router.back()}
//           >
//             <ArrowLeft className="h-4 w-4" />
//             Back
//           </Button>
          
//           <PredictionCard prediction={prediction} detailed />
          
//           <div className="mt-8 bg-white dark:bg-card rounded-lg shadow-sm p-4">
//             <CommentSection comments={comments} currentUser={currentUser} />
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

// "use client"

// import { FeedHeader } from '@/components/feed/feed-header';
// import { PredictionCard } from '@/components/feed/prediction-card';
// import { CommentSection } from '@/components/feed/comment-section';
// import { Button } from '@/components/ui/button';
// import { getPredictionById, getUserById, getAllPredictions } from '@/lib/data';
// import { ArrowLeft } from 'lucide-react';
// import { notFound } from 'next/navigation';
// import { useRouter } from 'next/navigation';


// export async function generateStaticParams() {
//   const predictions = await getAllPredictions(); // Fetch all predictions with IDs
 

//   return predictions.map((prediction: { id: string }) => ({
//     id: prediction.id,
//   }));
// }

// export default async function PredictionDetailPage({ params }: { params: { id: string } }) {
//   const prediction = await getPredictionById(params.id);
//  const router = useRouter();
//   // Mock user (or fetch real user)
//   const currentUser = getUserById('3') || {
//     id: '3',
//     name: 'Demo User',
//     email: 'demo@example.com',
//     createdAt: new Date(),
//   };

//   // Mock comments
//   const comments = [
//     {
//       id: '1',
//       content: 'I think you might be right. The current trends are pointing in this direction.',
//       createdAt: new Date('2024-04-01'),
//       author: getUserById('4')!,
//     },
//     {
//       id: '2',
//       content: 'This is a bold prediction. I respect it, but I disagree. Here\'s why...',
//       createdAt: new Date('2024-04-02'),
//       author: getUserById('5')!,
//     },
//   ];

//   if (!prediction) {
//     notFound(); // Use Next.js's notFound helper for 404s
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 dark:bg-background">
//       <FeedHeader />
//       <main className="container mx-auto px-4 py-6">
//         <div className="max-w-2xl mx-auto">
//           <Button
//             variant="ghost"
//             className="mb-4 pl-0 flex items-center gap-2"
//             onClick={() => router.back()}
           
//           >
//             <ArrowLeft className="h-4 w-4" />
//             Back
//           </Button>

//           <PredictionCard prediction={prediction} detailed />

//           <div className="mt-8 bg-white dark:bg-card rounded-lg shadow-sm p-4">
//             <CommentSection comments={comments} currentUser={currentUser} />
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

// app/prediction/[id]/page.tsx

import { FeedHeader } from '@/components/feed/feed-header';
import { PredictionCard } from '@/components/feed/prediction-card';
import { CommentSection } from '@/components/feed/comment-section';
import { getPredictionById, getUserById, getAllPredictions } from '@/lib/data';
import { notFound } from 'next/navigation';
import { BackButton } from '@/components/ui/back-button'; // <- client component

export async function generateStaticParams() {
  const predictions = await getAllPredictions();

  return predictions.map((prediction: { id: string }) => ({
    id: prediction.id,
  }));
}

export default async function PredictionDetailPage({ params }: { params: { id: string } }) {
  const prediction = await getPredictionById(params.id);

  const currentUser = getUserById('3') || {
    id: '3',
    name: 'Demo User',
    email: 'demo@example.com',
    createdAt: new Date(),
  };

  const comments = [
    {
      id: '1',
      content: 'I think you might be right. The current trends are pointing in this direction.',
      createdAt: new Date('2024-04-01'),
      author: getUserById('4')!,
    },
    {
      id: '2',
      content: 'This is a bold prediction. I respect it, but I disagree. Here\'s why...',
      createdAt: new Date('2024-04-02'),
      author: getUserById('5')!,
    },
  ];

  if (!prediction) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-background">
      <FeedHeader />
      <main className="container mx-auto px-4 py-6">
        <div className="max-w-2xl mx-auto">
          <BackButton /> {/* This is the client-side back button */}
          <PredictionCard prediction={prediction} detailed />
          <div className="mt-8 bg-white dark:bg-card rounded-lg shadow-sm p-4">
            <CommentSection comments={comments} currentUser={currentUser} />
          </div>
        </div>
      </main>
    </div>
  );
}


"use client"
import { ArrowLeft } from "lucide-react";
import PredictionCard from "../../components/PredictionCard";
import { NextPage } from "next";
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const Predictions: NextPage = () => {
    const router = useRouter();
  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
         <div className="flex items-center mb-6 -ml-3">
        <Button
          variant="ghost"
          size="icon"
          className=""
          onClick={() => router.back()}
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <h4 className="text-xs font-bold">Back</h4>
      </div>
      <h1 className="text-2xl font-bold mb-4">Your Predictions</h1>
      <div className="flex space-x-2 mb-6">
        <button className="px-4 py-1 rounded-full bg-black text-white text-sm">All</button>
        <button className="px-4 py-1 rounded-full bg-gray-200 text-sm">Paused</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
        {[...Array(6)].map((_, i) => (
          <PredictionCard key={i} views={214} comments={4} />
        ))}
      </div>
    </div>
  );
};

export default Predictions;

// <main className="container mx-auto px-4 py-6"></main>

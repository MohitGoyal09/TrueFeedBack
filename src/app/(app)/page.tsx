"use client";
import { Mail } from "lucide-react"; 
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import messages from "@/messages.json";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function Home() {
  return (
    <>
      <main className="flex flex-grow flex-col items-center justify-center bg-gray-800 text-white px-4 md:px-24 py-12">
        <section className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-5xl font-bold">
            Dive into the World of Anonymous Conversations
          </h1>
          <p className="mt-3 md:mt-4 text-base md:text-lg">
            Join the community and start chatting anonymously today!
          </p>
        </section>

        <Carousel
          plugins={[Autoplay({ delay: 1000 })]}
          className="w-full max-w-lg md:max-w-xl"
        >
          <CarouselContent>
            {messages.map((message, index) => (
              <CarouselItem key={index} className="p-4">
                <Card className="bg-gray-700 text-white">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold">{message.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col md:flex-row items-start space-y-2 md:space-y-0 md:space-x-4">
                    <Mail className="flex-shrink-0 w-6 h-6 text-gray-400" />
                    <div>
                      <p className="text-base">{message.content}</p>
                      <p className="text-xs text-gray-400">
                        {message.received}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </main>
      <footer className="text-center p-4 md:p-6 bg-gray-900 text-white">
        © 2024 True Feedback. All rights reserved.
      </footer>
    </>
  );
}

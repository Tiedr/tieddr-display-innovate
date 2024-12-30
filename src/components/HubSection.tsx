import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Users2, MessageSquare, Calendar } from "lucide-react";

export const HubSection = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-4xl lg:text-5xl font-bold">
              Collaborate with
              <span className="bg-gradient-to-r from-red-500 via-orange-500 to-purple-500 bg-clip-text text-transparent"> Hub</span>
            </h2>
            <p className="text-lg text-gray-400">
              Transform your team's workflow with Hub - the all-in-one collaborative workspace 
              that brings your projects, communications, and schedules together.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <Users2 className="text-purple-500" />
                <span>Team Spaces</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="text-orange-500" />
                <span>Real-time Chat</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="text-red-500" />
                <span>Smart Calendar</span>
              </div>
            </div>
            <Button className="bg-purple-600 hover:bg-purple-700">
              Try Hub Free
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-purple-600/20 blur-3xl rounded-full"></div>
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1000&auto=format&fit=crop"
              alt="Hub Interface"
              className="relative rounded-lg shadow-2xl border border-white/10"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
import { Link } from "wouter";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background">
      <div className="max-w-md w-full p-8 neo-border neo-shadow-lg bg-card text-center">
        <div className="flex justify-center mb-6">
          <AlertCircle className="h-16 w-16 text-destructive" />
        </div>
        <h1 className="text-4xl font-black uppercase text-foreground mb-4">404</h1>
        <p className="text-lg font-mono text-muted-foreground mb-8">
          You vibrated too far into the internet. This page doesn't exist.
        </p>
        <Link 
          href="/" 
          className="inline-block px-6 py-3 bg-primary text-white font-bold uppercase neo-border neo-shadow hover:translate-y-1 hover:neo-shadow-sm transition-all"
        >
          Return to Chaos
        </Link>
      </div>
    </div>
  );
}
